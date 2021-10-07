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
  const [alert, setAlert] = useState(null);

  //! Search Github users

  //! Get single Github user

  //! Get users repos

  //! Clear users from state

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
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
