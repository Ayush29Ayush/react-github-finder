import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import './App.css';

class App extends Component {
  
  render() {
    // const numbers = [1,2,3,4];

    return (
      <div className="App">
        {/* Down below we are using Props */}
        {/* <Navbar title="Github Finder" icon="fab fa-github" /> */}
        {/* <Navbar title="Hello Ayush"/> To overwrite the default props , give your own title. */}
        {/* <Navbar title={numbers}/> compines but gives error because it expected string and we provided numbers in the form of array */}
        <Navbar /> 
      </div>
    );
  }
}

export default App;
