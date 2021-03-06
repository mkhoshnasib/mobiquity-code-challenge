import React, { Component } from 'react';
import './Header.scss';
import f1 from '../../assets/imgs/f1.png';

class Header extends Component {
  render() {
    return (
      <div className="bg-dark text-center py-lg-5 py-3">
        <h1 className="text-white">
          <strong>WELCOME TO</strong>
          <img src={f1} alt="f1-logo" className="img-f1-logo mx-2" />
          <strong>CHAMPION HISTORY</strong>
        </h1>
        <h2 className="text-warning mt-3">
          <strong>2005 - 2015</strong>
        </h2>
      </div>
    );
  }
}

export default Header;
