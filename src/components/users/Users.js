import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  // Props
  state = {
    users: [
      {
        id: "1",
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
      },
      {
        id: "2",
        login: "defunkt",
        avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
        html_url: "https://github.com/defunkt",
      },
      {
        id: "3",
        login: "pjhyett",
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        html_url: "https://github.com/pjhyett",
      },
    ],
  };

  render() {
    return (
      //! using style attribute instead of doing inline
      <div style={userStyle}>
        {/* The map() function is used to iterate over an array and manipulate or change data items. In React, the map() function is most commonly used for rendering a list of data to the DOM. ... The map() function expects a callback as the argument and executes it once for each element in the array. */}
        {this.state.users.map((user) => (
          //! prop name = { anything } , not necessary ki same ho , you can change any of the one if you want to
          // key is given for uniqueness else we will get warning and error sometimes
          //! Syntax is PropName = PropData , since now it's user={user} it can also be xyz = {user} where user is the argument inside the map function 
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  // gridTemplateColumns: 'repeat(4, 1fr)',
  // gridTemplateColumns: 'repeat(5, 1fr)', means 5 columns and 1 fr means 1 fraction of that 5
  gridGap: "1rem",
  // gridGap: '20rem'
};

export default Users;
