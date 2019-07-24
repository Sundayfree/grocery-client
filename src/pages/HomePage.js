import React, { Component } from 'react';

import HomeStyle from './Home.module.scss';
import Footer from '../components/Footer';
import MenuComp from '../components/MenuComp';
import NavCompo from '../components/NavCompo';
import TableCompo from '../components/Table';
import UserTable from '../components/UserTable';
import { get } from '../API/API';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      linkTo: true,
      isLoading: false,
      isOkey: false
    };
  }
  async componentWillMount() {
    const email = this.props.location.state.email;
    let res = await get(`/api/findUser/${email}`);
    if (res.code === 0) {
      const payload = res.data;
      this.setState({
        isLoading: true,
        payload
      });
    }
    res = await get('/api/find');
    if (res.code === 0) {
      this.setState({
        users: res.data,
        isOkey: true
      });
    }
  }

  componentWillUnmount() {
    this.setState({
      isLoading: false
    });
  }

  handler(e) {
    this.setState({
      linkTo: e
    });
  }
  render() {
    return (
      <div>
        {this.state.isLoading && this.state.isOkey ? (
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
                <NavCompo
                  history={this.props.history}
                  userName={this.state.payload.userName}
                  type={this.state.payload.type === 1 ? 'Admin' : 'User'}
                />

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
                      Amount="Amount"
                      Description="Description"
                      Create="Create Time"
                      Update="Update Time"
                      IsAdmin={this.state.payload.type === 1 ? true : false}
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
                      IsAdmin={this.state.payload.type === 1 ? true : false}
                      users={this.state.users}
                    />
                  )}
                </div>
              </div>
            </div>
            <Footer />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default HomePage;
