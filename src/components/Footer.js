import React from 'react';
import FooterStyle from './Footer.module.scss';
export default function Footer() {
  return (
    <div>
      <footer className={FooterStyle.footer}>
        <p className={FooterStyle.author}> 2019 @ Liu & Angela</p>
      </footer>
    </div>
  );
}
