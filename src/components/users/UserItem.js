import React from "react";
import PropTypes from "prop-types"

// function UserItem {
// const UserItem = (props) => {
//! Destructuring props
const UserItem = ({ user: {login, avatar_url, html_url} }) => {
    
    // const { login, avatar_url, html_url } = props.user; // user is the prop name

    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />

        <h3>{login}</h3>

        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
}

UserItem.propTypes = {
  // user: PropTypes.array.isRequired, //! Using ES7 snippets , type pt for proptypes , a for array and r for require. So type "ptar" and press enter
  // user: PropTypes.array, //! Using ES7 snippets , type pt for proptypes , a for array . So type "pta" and press enter

  user: PropTypes.object.isRequired, //! Using ES7 snippets , type pt for proptypes , o for object and r for require. So type "ptor" and press enter
  
}


export default UserItem;
