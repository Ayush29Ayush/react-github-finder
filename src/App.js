import React, { Component } from "react";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layouts/Alert";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  //! Search Github users
  searchUsers = async (text) => {
    this.setState({ loading: true });

    // console.log(text)
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    // this.setState({ users: res.data, loading: false });
    this.setState({ users: res.data.items, loading: false });
  };

  //! Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  //! Set Alert
  setAlert = (msg, type) => {
    // this.setState({ alert: { msg:msg, type:type} })
    this.setState({ alert: { msg, type } });
    //alert will be set to null after 5 seconds
    setTimeout(()=> this.setState({ alert: null }), 5000)
  };

  render() {
    const { users, loading } = this.state;

    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
