import React, { useState } from "react";
import PropTypes from "prop-types";

// const Search = (props) => {
const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  // state = {
  //   text: "",
  // };
  //! defining state
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // if (this.state.text === "") {
    if (text === "") {
      // this.props.setAlert("Please enter something", "light");
      setAlert("Please enter something", "light");
    } else {
      // searchUsers(this.state.text);
      searchUsers(text);
      // this.setState({ text: "" });
      setText("");
    }
  };

  // const onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit.bind(this)} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          // value={this.state.text}
          value={text}
          // without onChange , we cannot give input
          // onChange={this.onChange}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  //! type "ptfr" for proptypes func required
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
