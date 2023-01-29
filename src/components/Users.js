import React, { Component } from 'react';
import '../assets/css/Users.css';
import '../assets/css/Global.css';

class Users extends Component {
  render() {
    return (
      <div id='users-box'>
        <span>
            <input type="text" placeholder='Usuário'></input>
        </span>
        <span className='left-15'>
            <input type="password" placeholder='senha'></input>
        </span>
        <span>
          <button id="btn-ok" className='left-15 cp'>OK</button>
        </span>
      </div>  
      
    );
  }
}

export default Users;