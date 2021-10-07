import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  //   const initialState = {
  //     alerts: null
  //   };
  //! Since there's only one state , pass it like this
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type) => {
    dispatch({
        type: SET_ALERT,
        payload: { msg, type }
    })

    //alert will be set to null after 5 seconds
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };


  return (
    <AlertContext.Provider
      value={{
        //! Inside here stays anything that we need available for our entire app
        alert: state,
        setAlert
      }}
    >
      {/* //! {props.children} is used because we are going to wrap our entire application in this provider */}
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
