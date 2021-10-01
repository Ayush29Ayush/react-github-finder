// type "rafce" and press enter. rafce => react arrow func. component export

import React, { Fragment } from "react";
import spinner from "../layouts/spinner.gif";

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt="Loading..."
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  </Fragment>
);

export default Spinner;
