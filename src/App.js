import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Cards from './components/Cards'
import Users from './components/Users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Users/>
        <Header/>
        <Cards/>
      </div>
    );
  }
}

export default App;
