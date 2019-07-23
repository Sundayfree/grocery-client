import React, { Component } from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';

class TableCompo extends Component {
  render() {
    const { Header, Row, HeaderCell, Body, Cell } = Table;
    console.log(this.props.IsAdmin);
    return (
      <div className={this.props.box}>
        {/* <Icon
          name="plus"
          style={{
            fontSize: '1.2em',
            position: 'absolute',
            left: '19.8em',
            top: '8em'
          }}
        /> */}
        <Table celled className={this.props.table}>
          <Header>
            <Row>
              <HeaderCell textAlign={'center'}>{this.props.ID}</HeaderCell>
              <HeaderCell textAlign={'center'}>{this.props.Name}</HeaderCell>
              <HeaderCell textAlign={'center'}>{this.props.First}</HeaderCell>
              <HeaderCell textAlign={'center'}>{this.props.type}</HeaderCell>
              <HeaderCell textAlign={'center'}>{this.props.Last}</HeaderCell>

              <HeaderCell textAlign={'center'}>{this.props.email}</HeaderCell>

              <HeaderCell textAlign={'center'}>{this.props.address}</HeaderCell>

              <HeaderCell textAlign={'center'} columns={3}>
                {this.props.Option}
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
