import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// const Navbar = (props) => {
const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        {/* <i className={props.icon}/> {props.title} */}
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          {/* <a href="/">Home</a> */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <a href="/about">About</a> */}
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

// Default Props
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

// PropTypes => Used to set the "Type" for the Props
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
