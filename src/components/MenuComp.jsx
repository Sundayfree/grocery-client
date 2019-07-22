import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

class MenuComp extends Component {
  state = { activeItem: 'Product' };

  handleProductClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.linkHandler(true);
  };
  handleUserClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.linkHandler(false);
  };
  componentWillUpdate() {}
  render() {
    const { activeItem } = this.state;

    return (
      <Menu className={this.props.menu}>
        <Menu.Item
          name="editorials"
          active={activeItem === 'Product'}
          onClick={this.handleProductClick}
          className={this.props.item}
        >
          <Icon name="product hunt" size={'large'} />
          Product
        </Menu.Item>

        <Menu.Item
          name="reviews"
          active={activeItem === 'Users'}
          onClick={this.handleUserClick}
          className={this.props.item}
        >
          <Icon name="user outline" size={'large'} />
          Users
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuComp;
