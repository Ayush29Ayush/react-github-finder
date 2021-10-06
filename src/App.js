import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import axios from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layouts/Alert";
import { About } from "./components/pages/About";

import GithubState from "./context/github/GithubState";

import "./App.css";

const App = () => {
  //! Mimicing the above state using hooks useState()
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  //! Search Github users
  const searchUsers = async (text) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    setUsers(res.data.items);
    setLoading(false);
  };

  //! Get single Github user
  const getUser = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    setUser(res.data);
    setLoading(false);
  };

  //! Get users repos
  const getUserRepos = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_secret}`
    );

    console.log(res.data);

    setRepos(res.data);
    setLoading(false);
  };

  //! Clear users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  //! Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    //alert will be set to null after 5 seconds
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <GithubState>
    {/* //! Making a default home page/directory using router */}
    <Router>
      <div className="App">
        <Navbar />

        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
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
                  getUser={getUser}
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
    </GithubState>
  );
};

export default App;
