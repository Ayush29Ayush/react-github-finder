
// import React from 'react';
import React, { Component } from 'react';
import './App.css';

// function App() {

//! Here we are using class based component rather that functional based component
//! extends React.Component is compulsory


// here we directly imported Component from React library
// class App extends React.Component {     
class App extends Component {
  //! Methods are functions that belongs to the class and can be used in objects.
  //! JavaScript methods are actions that can be performed on objects. A JavaScript method is a property containing a function definition.
  boo = () => 'BOO' // this is a method that's part of the class

  render() {

    const name = 'John Doe' // declared name variable
    const name1 = 'Ayush' // declared name variable
    const foo = () => 'Bar' // arrow function

    const loading = true
    const loading1 = false

    // if (loading) {
    //   return <h4>Loading ...</h4>
    // }

    const showName = true

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
        <h1>Hello {name}</h1>
        <h1>Hello {name.toUpperCase()}</h1>
        <h1>Hello {1 + 1}</h1>
        <h1>Hello {foo()}</h1>

        {/* Use "this" to access methods(functions) of the class */}
        <h1>Hello {this.boo()}</h1>

        {/* This is short hand syntax of Conditional statement => if-else */}
        {loading ? <h4>Loading...</h4> : <h1>Hello {name}</h1>}

        {loading1 ? <h4>Loading...</h4> : <h1>Hello {showName ? name1 : null}</h1>}
        {/* This can also be written using AND gate.   If both true then output else no output*/}
        {loading1 ? <h4>Loading...</h4> : <h1>Hello {showName && name1}</h1>}
        <label htmlFor='name'>Name</label>
        <h2>GoodBye</h2>
      </div>
    );
  }
}

export default App;
