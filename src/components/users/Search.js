import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  //   onSubmit(e) {
  //     e.preventDefault();
  //     console.log(this.state.text)
  //     // we will get error => "cannot read property 'state' of undefined" , to prevent the error do , onSubmit={this.onSubmit.bind(this) or else use arrow function
  //   }
  onSubmit = (e) => {
    e.preventDefault();
    // here we dont get error because "this" works differently for arrow functions
    console.log(this.state.text);
  };

  //   onChange = (e) => {
  //       // here we are using key:value pair type method
  //       //   this.setState({ text: e.target.value })
  //       this.setState({ [e.target.name]: e.target.value })
  //   }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            // without onChange , we cannot give input
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
