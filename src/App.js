import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import axios from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layouts/Alert";
import { About } from "./components/pages/About";
import "./App.css";

const App = () => {
  // state = {
  //   users: [],
  //   user: {},
  //   repos: [],
  //   loading: false,
  //   alert: null,
  // };

  //! Mimicing the above state using hooks useState()
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  //! Search Github users
  const searchUsers = async (text) => {
    // this.setState({ loading: true });
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    // this.setState({ users: res.data.items, loading: false });
    setUsers(res.data.items);
    setLoading(false);
  };

  //! Get single Github user
  const getUser = async (username) => {
    // this.setState({ loading: true });
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    // this.setState({ users: res.data.items, loading: false });
    // this.setState({ repos: res.data, loading: false });
    setUser(res.data);
    setLoading(false);
  };

  //! Get users repos
  const getUserRepos = async (username) => {
    // this.setState({ loading: true });
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    // this.setState({ users: res.data.items, loading: false });
    // this.setState({ user: res.data, loading: false });
    setRepos(res.data);
    setLoading(false);
  };

  //! Clear users from state
  // clearUsers = () => this.setState({ users: [], loading: false });
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  //! Set Alert
  const showAlert = (msg, type) => {
    // this.setState({ alert: { msg, type } });
    setAlert({ msg, type });

    //alert will be set to null after 5 seconds
    // setTimeout(() => this.setState({ alert: null }), 5000);
    setTimeout(() => setAlert(null), 5000);
  };

  // const { users, user, repos, loading } = this.state;

  return (
    //! Making a default home page/directory using router
    <Router>
      <div className="App">
        <Navbar />

        <div className="container">
          {/* <Alert alert={this.state.alert} /> */}
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Search
                    // searchUsers={this.searchUsers}
                    searchUsers={searchUsers}
                    // clearUsers={this.clearUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    // setAlert={this.setAlert}
                    setAlert={showAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <User
                  {...props}
                  // getUser={this.getUser}
                  getUser={getUser}
                  // getUserRepos={this.getUserRepos}
                  getUserRepos={getUserRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
