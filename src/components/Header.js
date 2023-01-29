import React, { Component } from 'react';
import logo from '../assets/img/fluminense-logo.svg';
import '../assets/css/Header.css';

class Header extends Component {
  render() {
    return (
      <div id='back-header'>
        <div className='header'>
            <div className='div-logo'><img src={logo} width='120px' alt="Fluminense Logo"></img></div>
            <div className='grena-tag'></div>
            <div className='white-tag'>
                <span>FLUMINENSE FOOTBALL CLUB</span>
            </div>
            <div className='green-tag'></div>
        </div>
      </div>  
      
    );
  }
}

export default Header;