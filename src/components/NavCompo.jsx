import React from 'react';
import { Image, Icon } from 'semantic-ui-react';
import NavStyle from './Nav.module.scss';
export default function NavCompo(props) {
  return (
    <nav className={NavStyle.nav}>
      <Image src={require('../img/lion.png')} avatar className={NavStyle.img} />
      <div className={NavStyle.title}>
        <span className={NavStyle.span}>admin: username</span>
        <Icon
          name="log out"
          color={'blue'}
          size={'big'}
          onClick={() => props.history.push('/')}
        />
      </div>
    </nav>
  );
}
