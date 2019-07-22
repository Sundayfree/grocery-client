import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Modal,
  Input,
  Select,
  Confirm
} from 'semantic-ui-react';
import LoginStyle from './Login.module.scss';
import { post } from '../API/API';

const genderOptions = [
  { key: '0', text: 'Admin', value: 'Admin' },
  { key: '1', text: 'User', value: 'User' }
];
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      rePassword: '',
      email: '',
      open: false,
      msg: '',
      address: '',
      type: '',
      FirstName: '',
      lastName: '',
      text: '',
      show: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
    this.close = this.close.bind(this);
    this.registerHandler = this.registerHandler.bind(this);
  }
  close() {
    this.setState({
      open: false
    });
  }

  handleChange(e) {
    let type = null;
    const { name, value } = e.target;
    if (value === undefined) {
      type = e.target.children[0].innerText;
    }
    this.setState({
      [name]: value
    });
  }
  async loginHandler() {
    if (this.state.password === '' || this.state.email === '') {
      this.setState({
        open: true,
        msg: 'all the fields required..'
      });
      return;
    }
    const payload = {
      email: this.state.email,
      password: this.state.password
    };

    const res = await post('/api/login', payload);

    if (res.code === 0) {
      this.props.history.push('/dashboard');
    } else {
      this.setState({
        open: true,
        msg: res.msg
      });
    }
  }
  async registerHandler() {
    // if (
    //   this.state.username === '' ||
    //   this.state.password === '' ||
    //   this.state.rePassword === '' ||
    //   this.state.email === '' ||
    //   this.state.address === '' ||
    //   this.state.FirstName === '' ||
    //   this.state.lastName === '' ||
    //   this.state.type === ''
    // ) {
    //   this.setState({
    //     show: true,
    //     msg: 'All the fields required..'
    //   });
    //   return;
    // }
    // if (this.state.password === this.state.rePassword) {
    //   this.setState({
    //     show: true,
    //     msg: 'Passwords Not Matched..'
    //   });
    //   return;
    // }
    const payload = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      address: this.state.address,
      FirstName: this.state.FirstName,
      lastName: this.state.lastName,
      type: this.state.type === 'Admin' ? 0 : 1
    };
    const res = await post('/api/register', payload);
    console.log(res);
  }
  componentDidUpdate() {
    setTimeout(() => {
      this.setState({
        show: false
      });
    }, 3000);
  }

  render() {
    return (
      <div>
        <Grid
          textAlign="center"
          style={{ height: '100vh' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="black" textAlign="center">
              Log-in to your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  name="email"
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                />

                <Button
                  color="black"
                  fluid
                  size="large"
                  onClick={this.loginHandler}
                >
                  Login
                </Button>
                <Confirm
                  open={this.state.open}
                  onCancel={() => this.setState({ open: false })}
                  onConfirm={this.close}
                  content={this.state.msg}
                  style={{ width: '20em' }}
                />
              </Segment>
            </Form>
            <Message>
              New to us?{'    '}
              <Modal
                trigger={
                  <Button basic color="black" circular>
                    Sign Up
                  </Button>
                }
                size="small"
              >
                <Modal.Content className={LoginStyle.container}>
                  <Form>
                    {this.state.show ? (
                      <p
                        style={{
                          color: 'red',
                          textAlign: 'center',
                          fontSize: '16px'
                        }}
                      >
                        {this.state.msg}
                      </p>
                    ) : null}
                    <Form.Field
                      label="Email"
                      control="input"
                      name="email"
                      id="form-subcomponent-shorthand-input-first-name"
                      placeholder="liu@gmail.com"
                      onChange={this.handleChange}
                    />

                    <Form.Field
                      label="Password"
                      control="input"
                      name="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />

                    <Form.Field
                      label="RePassword"
                      control="input"
                      name="rePassword"
                      placeholder="RePassword"
                      onChange={this.handleChange}
                    />
                    <Form.Field
                      label="Username"
                      control="input"
                      name="userName"
                      placeholder="Username"
                      onChange={this.handleChange}
                    />
                    <Form.Field
                      label="Address"
                      control="input"
                      name="address"
                      placeholder="Address"
                      onChange={this.handleChange}
                    />
                    <Form.Group widths="equal">
                      <Form.Field
                        id="form-input-control-first-name"
                        control={Input}
                        name="FirstName"
                        label="First name"
                        placeholder="First name"
                        onChange={this.handleChange}
                      />
                      <Form.Field
                        id="form-input-control-last-name"
                        control={Input}
                        name="lastName"
                        label="Last name"
                        placeholder="Last name"
                        onChange={this.handleChange}
                      />
                      <Form.Field
                        control={Select}
                        options={genderOptions}
                        label={{
                          children: 'Type'
                        }}
                        placeholder="Type"
                        name="type"
                        search
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Field
                      id="form-button-control-public"
                      control={Button}
                      content="Confirm"
                      color="black"
                      size={'large'}
                      circular
                      style={{ marginLeft: '12.5em', width: '17em' }}
                      onClick={this.registerHandler}
                    />
                    <Confirm
                      open={this.state.open}
                      onCancel={() => this.setState({ open: false })}
                      onConfirm={this.close}
                      content={this.state.msg}
                      style={{ width: '20em' }}
                    />
                  </Form>
                </Modal.Content>
              </Modal>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LoginForm;
