import axios from 'axios';
//import { setAlert } from './alert';
import {
  GET_TESTS,
  TEST_ERROR,
  DELETE_TEST,
} from './types';

// Get tests
export const getTests = () => async dispatch => {
  try {
    const res = await axios.get('/api/test');

    dispatch({
      type: GET_TESTS,
      payload: res.data
    });

  } catch (err) {
    dispatch({
      type: TEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete test
export const deleteTest = id => async dispatch => {
  try {
    await axios.delete(`/api/test/${id}`);
    await window.location.reload(false);

    dispatch({
      type: DELETE_TEST,
      payload: id
    });

    //dispatch(setAlert('Test Removed', 'success'));
  } catch (err) {
    dispatch({
      type: TEST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
