import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import UserItem from './components/users/UserItem'
import './App.css';

class App extends Component {
  
  render() {
    // const numbers = [1,2,3,4];

    return (
      <div className="App">
    
        <Navbar /> 
        <UserItem />
      </div>
    );
  }
}

export default App;
