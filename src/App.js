
// import React from 'react';
import React , { Component }from 'react';
import './App.css';

// function App() {

//! Here we are using class based component rather that functional based component
//! extends React.Component is compulsory


// here we directly imported Component from React library
// class App extends React.Component {     
class App extends Component {

  render(){
    return (
      <div className="App">
        <h1>Hello from React</h1>
      </div>
    );
  } 
}

export default App;
