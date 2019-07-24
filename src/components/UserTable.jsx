import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';

class TableCompo extends Component {
  render() {
    const { Header, Row, HeaderCell, Body, Cell } = Table;

    return (
      <div className={this.props.box}>
        <Table celled className={this.props.table}>
          <Header>
            <Row>
              <HeaderCell textAlign={'center'}>{this.props.ID}</HeaderCell>
              <HeaderCell textAlign={'center'}>{this.props.Name}</HeaderCell>
              <HeaderCell textAlign={'center'}>{this.props.First}</HeaderCell>
              <HeaderCell textAlign={'center'}>{this.props.Last}</HeaderCell>
              <HeaderCell textAlign={'center'}>{this.props.type}</HeaderCell>

              <HeaderCell textAlign={'center'}>{this.props.email}</HeaderCell>

              <HeaderCell textAlign={'center'}>{this.props.address}</HeaderCell>

              {this.props.IsAdmin ? (
                <HeaderCell textAlign={'center'} columns={3}>
                  Option
                </HeaderCell>
              ) : null}
            </Row>
          </Header>

          <Body>
            {this.props.users.map((user, i) => {
              return (
                <Row>
                  <Cell textAlign={'center'} key={i}>
                    {user.userId}
                  </Cell>
                  <Cell textAlign={'center'} key={i}>
                    {user.userName}
                  </Cell>
                  <Cell textAlign={'center'} key={i}>
                    {user.firstName}
                  </Cell>
                  <Cell textAlign={'center'} key={i}>
                    {user.lastName}
                  </Cell>
                  <Cell textAlign={'center'} key={i}>
                    {user.type}
                  </Cell>
                  <Cell textAlign={'center'} key={i}>
                    {user.email}
                  </Cell>
                  <Cell textAlign={'center'} key={i}>
                    {user.address}
                  </Cell>
                  {this.props.IsAdmin ? (
                    <Cell textAlign={'center'} key={i}>
                      <span>
                        <Button size="mini" circular color="blue">
                          Delete
                        </Button>
                        <Button size="mini" circular color="orange">
                          Update
                        </Button>
                      </span>
                    </Cell>
                  ) : null}
                </Row>
              );
            })}
            {/* <Cell textAlign={'center'}>First</Cell>
              <Cell textAlign={'center'}>Cell</Cell>
              <Cell textAlign={'center'}>Cell</Cell>
              <Cell textAlign={'center'}>First</Cell>
              <Cell textAlign={'center'}>Cell</Cell>
              <Cell textAlign={'center'}>Cell</Cell>
              <Cell textAlign={'center'}>Cell</Cell>
              {this.props.IsAdmin ? (
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
              ) : null} */}
          </Body>
        </Table>
      </div>
    );
  }
}

export default TableCompo;
