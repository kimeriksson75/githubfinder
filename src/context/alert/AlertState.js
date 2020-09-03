import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SHOW_ALERT, HIDE_ALERT } from '../types';

export const AlertState = (props) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({
      type: SHOW_ALERT,
      payload: { msg, type },
    });
    setTimeout(
      () =>
        dispatch({
          type: HIDE_ALERT,
        }),
      5000
    );
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};
export default AlertState;
