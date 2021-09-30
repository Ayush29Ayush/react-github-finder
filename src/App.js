import React, { Component } from "react";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false
  }



  // Using Life cycle method , render is also a life cycle method. 
  //! componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
  async componentDidMount() {
    this.setState({ loading: true })


    // console.log(123);
    //! axios deals with promises so we can use .then
    const res = await axios
      .get("https://api.github.com/users")
      // .then((res) => console.log(res.data));

      // console.log(res.data)
      this.setState({ users: res.data, loading: false })
  }

  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
