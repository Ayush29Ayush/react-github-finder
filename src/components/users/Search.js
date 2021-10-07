import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

// const Search = (props) => {
const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);

  //! defining state
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
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
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  //! type "ptfr" for proptypes func required
  // searchUsers: PropTypes.func.isRequired,
  // clearUsers: PropTypes.func.isRequired,
  // showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
