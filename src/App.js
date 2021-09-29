
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
      
      //React.Fragment => they're basically a none element wrapper to contain other elements that don't have a single parent. You can only return one element from a render but that element can have any number of children.
      //  https://reactjs.org/docs/fragments.html
      // <React.Fragment>       other way is just give "<>" (short-hand notation)
      // <Fragment>
      //   <h1>Hello from React</h1>
      //   <label htmlFor='name'>Name</label>
      //   <h2>GoodBye</h2>
      // </Fragment>
      
      //! This is all with JSX 
      <div className="App">
        <h1>Hello from React</h1>
        <label htmlFor='name'>Name</label>
        <h2>GoodBye</h2>
      </div>
    );
  } 
}

export default App;
