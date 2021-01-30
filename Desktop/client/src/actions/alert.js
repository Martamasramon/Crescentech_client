import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

  export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuidv4(); // Get universal id
  dispatch({
    type: SET_ALERT,
    // Giving an alert type to tap into css classes to customise appearance
    // i.e. different colours for different message types
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
