import React, { Component } from 'react';
import {
  Table,
  Button,
  Icon,
  Message,
  Segment,
  Modal,
  Input,
  Select,
  Confirm,
  Form
} from 'semantic-ui-react';

class TableCompo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showModal: false
    };

    //    this.close = this.close.bind(this);
    this.btnHandler = this.btnHandler.bind(this);
  }
  btnHandler() {
    this.setState({
      showModal: false
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body, Cell } = Table;

    return (
      <div className={this.props.box}>
        <Modal
          open={this.state.showModal}
          trigger={
            <Icon
              name="plus"
              style={{
                fontSize: '1.2em',
                position: 'absolute',
                left: '19.8em',
                top: '8em'
              }}
              onClick={() => this.setState({ showModal: true })}
            />
          }
          size="small"
        >
          <Modal.Content>
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
              </Form.Group>
              <Form.Field
                id="form-button-control-public"
                control={Button}
                content="Confirm"
                color="black"
                size={'large'}
                circular
                style={{ marginLeft: '12.5em', width: '17em' }}
                onClick={this.btnHandler}
              />
            </Form>
          </Modal.Content>
        </Modal>

        <Table celled className={this.props.table}>
          <Header>
            <Row>
              <HeaderCell textAlign={'center'}>{this.props.ID}</HeaderCell>
              <HeaderCell textAlign={'center'}>{this.props.Name}</HeaderCell>
              <HeaderCell textAlign={'center'}>{this.props.Price}</HeaderCell>

              <HeaderCell textAlign={'center'}>{this.props.Cost}</HeaderCell>

              <HeaderCell textAlign={'center'}>{this.props.Image}</HeaderCell>
              <HeaderCell textAlign={'center'}>
                {this.props.Description}
              </HeaderCell>
              <HeaderCell textAlign={'center'}>{this.props.Create}</HeaderCell>
              <HeaderCell textAlign={'center'}>
                {this.props.Update} Time
              </HeaderCell>
              <HeaderCell textAlign={'center'} columns={3}>
                Option
              </HeaderCell>
            </Row>
          </Header>

          <Body>
            <Row>
              <Cell textAlign={'center'}>First</Cell>
              <Cell textAlign={'center'}>Cell</Cell>
              <Cell textAlign={'center'}>Cell</Cell>
              <Cell textAlign={'center'}>First</Cell>
              <Cell textAlign={'center'}>Cell</Cell>
              <Cell textAlign={'center'}>Cell</Cell>
              <Cell textAlign={'center'}>First</Cell>
              <Cell textAlign={'center'}>Cell</Cell>
              <Cell textAlign={'center'}>
                <span>
                  <Button size="mini" circular color="blue">
                    Delete
                  </Button>
                  <Button size="mini" circular color="orange">
                    Update
                  </Button>
                </span>
              </Cell>
            </Row>
          </Body>
        </Table>
      </div>
    );
  }
}

export default TableCompo;
