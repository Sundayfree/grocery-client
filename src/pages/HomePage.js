import React, { Component } from 'react';

import HomeStyle from './Home.module.scss';
import Footer from '../components/Footer';
import MenuComp from '../components/MenuComp';
import NavCompo from '../components/NavCompo';
import TableCompo from '../components/Table';
import UserTable from '../components/UserTable';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      linkTo: true
    };
  }
  handler(e) {
    this.setState({
      linkTo: e
    });
    console.log(this.state.linkTo);
  }
  render() {
    return (
      <div>
        <div className={HomeStyle.container}>
          <aside className={HomeStyle.lAside}>
            <div className={HomeStyle.header} />
            <MenuComp
              menu={HomeStyle.menu}
              item={HomeStyle.item}
              linkHandler={this.handler}
            />
          </aside>
          <div className={HomeStyle.rAside}>
            <NavCompo history={this.props.history} />
            <div className={HomeStyle.content}>
              {this.state.linkTo ? (
                <TableCompo
                  box={HomeStyle.box}
                  table={HomeStyle.table}
                  ID="ID"
                  Name="Name"
                  Price="Price"
                  Cost="Cost"
                  Image="Image"
                  Description="Description"
                  Create="Create Time"
                  Update="Update Time"
                  Option="Option"
                  IsAdmin={true}
                />
              ) : (
                <UserTable
                  box={HomeStyle.box}
                  table={HomeStyle.table}
                  ID="ID"
                  Name="Name"
                  First="FirstName"
                  Last="lastName"
                  email="email"
                  address="address"
                  type="type"
                  Option="Option"
                  IsAdmin={true}
                />
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
