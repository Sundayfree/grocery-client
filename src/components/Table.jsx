import React, { Component } from 'react';

import {
  Table,
  Button,
  Icon,
  Modal,
  Input,
  Form,
  Loader,
  Confirm
} from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
import { post, get, Delete, put } from '../API/API';

class TableCompo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showModal: false,
      msg: '',
      onDimmer: false,
      productName: '',
      product_amount: '',
      price: '',
      description: '',
      cost: '',
      product_img: '',
      update_time: '',
      create_time: '',
      isLoading: false,
      open: false,
      productId: ''
    };
    this.btnHandler = this.btnHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.close = this.close.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }
  async deleteHandler(e) {
    const res = await Delete('/api/deleteProduct/', e.target.name);
    if (res.code === 0) {
      this.setState({
        open: true,
        msg: res.msg
      });
    } else {
      this.setState({
        open: true,
        msg: res.msg
      });
    }
  }
  close() {
    this.setState({
      open: false,
      showModal: false
    });
  }
  async componentWillUpdate(nextP, nextS) {
    console.log(nextP, nextS);
    const res = await get('/api/list');
    if (res.code === 0) {
      this.setState({
        isLoading: true,
        data: res.data
      });
    }
  }

  async btnHandler(e) {
    this.setState({
      showModal: true,
      onDimmer: true,
      productId: e.target.name
    });
  }
  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };
  handleDate = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };

  async submitHandler() {
    if (this.state.productId) {
      const res = await put('/api/update/', this.state.productId, {
        productId: this.state.productId,
        productName: this.state.productName,
        product_amount: this.state.product_amount,
        price: this.state.price,
        description: this.state.description,
        cost: this.state.cost,
        update_time: this.state.update_time
      });
      if (res.code === 0) {
        this.setState({
          showModal: false,
          open: true,
          msg: res.msg
        });
      }
    } else {
      const res = await post('/api/saveProduct', {
        productName: this.state.productName,
        product_amount: this.state.product_amount,
        price: this.state.price,
        description: this.state.description,
        cost: this.state.cost,
        create_time: this.state.create_time
      });
      if (res.code === 0) {
        this.setState({
          showModal: false,
          open: true,
          msg: res.msg
        });
      } else {
        this.setState({
          open: true,
          msg: res.msg
        });
      }
    }
  }
  async componentWillMount() {
    const res = await get('/api/list');
    if (res.code === 0) {
      this.setState({
        isLoading: true,
        data: res.data
      });
    }
  }

  componentWillUnmount() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body, Cell } = Table;

    return (
      <div className={this.props.box}>
        {this.state.isLoading ? (
          <div>
            <Icon
              name="plus"
              style={{
                fontSize: '1.2em',
                position: 'absolute',
                left: '19.8em',
                top: '8em'
              }}
              onClick={() => this.setState({ showModal: true, onDimmer: true })}
            />
            <Modal
              closeOnDimmerClick={this.state.onDimmer}
              open={this.state.showModal}
              size="small"
              onClose={this.close}
            >
              <Modal.Content>
                <Form>
                  <Form.Group widths="equal">
                    <Form.Field
                      label="Product name"
                      control="input"
                      name="productName"
                      id="form-subcomponent-shorthand-input-first-name"
                      placeholder="product name"
                      onChange={this.handleChange}
                    />

                    <Form.Field
                      label="amount"
                      control="input"
                      name="product_amount"
                      placeholder="amount"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Field
                      id="form-input-control-first-name"
                      control={Input}
                      name="price"
                      label="Price"
                      placeholder="price"
                      onChange={this.handleChange}
                    />
                    <Form.Field
                      id="form-input-control-first-name"
                      control={Input}
                      name="cost"
                      label="Cost"
                      placeholder="cost"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    {this.state.productId === '' ? (
                      <DateInput
                        name="create_time"
                        placeholder="create time"
                        value={this.state.create_time}
                        iconPosition="left"
                        onChange={this.handleDate}
                        popupPosition="right center"
                      />
                    ) : (
                      <DateInput
                        name="update_time"
                        placeholder="update time"
                        value={this.state.update_time}
                        iconPosition="right center"
                        onChange={this.handleDate}
                        popupPosition=" left"
                      />
                    )}

                    <Form.Field>
                      <Input type="file" name="product_img" />
                    </Form.Field>
                  </Form.Group>
                  <Form.Field
                    label="description"
                    control="input"
                    name="description"
                    placeholder="Description"
                    onChange={this.handleChange}
                  />
                  <Form.Field
                    id="form-button-control-public"
                    control={Button}
                    content="Confirm"
                    color="black"
                    size={'large'}
                    circular
                    style={{ marginLeft: '12.5em', width: '17em' }}
                    onClick={this.submitHandler}
                  />
                </Form>
              </Modal.Content>
            </Modal>

            <Table celled className={this.props.table}>
              <Header>
                <Row>
                  <HeaderCell textAlign={'center'}>{this.props.ID}</HeaderCell>
                  <HeaderCell textAlign={'center'}>
                    {this.props.Name}
                  </HeaderCell>
                  <HeaderCell textAlign={'center'}>
                    {this.props.Price}
                  </HeaderCell>

                  <HeaderCell textAlign={'center'}>
                    {this.props.Cost}
                  </HeaderCell>
                  <HeaderCell textAlign={'center'}>
                    {this.props.Amount}
                  </HeaderCell>
                  <HeaderCell textAlign={'center'}>
                    {this.props.Image}
                  </HeaderCell>
                  <HeaderCell textAlign={'center'}>
                    {this.props.Description}
                  </HeaderCell>
                  <HeaderCell textAlign={'center'}>
                    {this.props.Create}
                  </HeaderCell>
                  <HeaderCell textAlign={'center'}>
                    {this.props.Update}
                  </HeaderCell>
                  {this.props.IsAdmin ? (
                    <HeaderCell textAlign={'center'} columns={3}>
                      Option
                    </HeaderCell>
                  ) : null}
                </Row>
              </Header>

              <Body>
                {this.state.data.map((p, i) => {
                  return (
                    <Row>
                      <Cell textAlign={'center'} key={i + 1}>
                        {p.productId}
                      </Cell>
                      <Cell textAlign={'center'} key={i + 2}>
                        {p.productName}
                      </Cell>
                      <Cell textAlign={'center'} key={i + 4}>
                        {p.price}
                      </Cell>
                      <Cell textAlign={'center'} key={i + 5}>
                        {p.cost}
                      </Cell>
                      <Cell textAlign={'center'} key={i + 6}>
                        {p.product_amount}
                      </Cell>
                      <Cell textAlign={'center'} key={i + 7}>
                        {p.product_img}
                      </Cell>
                      <Cell textAlign={'center'} key={i + 8}>
                        {p.description}
                      </Cell>
                      <Cell textAlign={'center'} key={i + 8}>
                        {p.create_time}
                      </Cell>
                      <Cell textAlign={'center'} key={i + 9}>
                        {p.update_time}
                      </Cell>

                      {this.props.IsAdmin ? (
                        <Cell textAlign={'center'} key={i + 10}>
                          <span>
                            <Button
                              size="mini"
                              circular
                              color="blue"
                              name={p.productId}
                              onClick={this.deleteHandler}
                            >
                              Delete
                            </Button>
                            <Button
                              size="mini"
                              circular
                              color="orange"
                              name={p.productId}
                              onClick={this.btnHandler}
                            >
                              Update
                            </Button>
                          </span>
                        </Cell>
                      ) : null}
                    </Row>
                  );
                })}
              </Body>
            </Table>
          </div>
        ) : (
          <Loader
            as="div"
            active
            inline="centered"
            content="Loading"
            style={{ marginTop: '2em' }}
          />
        )}
        <Confirm
          open={this.state.open}
          onCancel={() => this.setState({ open: false })}
          onConfirm={this.close}
          content={this.state.msg}
          style={{ width: '20em' }}
        />
      </div>
    );
  }
}

export default TableCompo;
