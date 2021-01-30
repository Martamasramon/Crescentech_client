import {
  GET_TESTS,
  DELETE_TEST,
  TEST_ERROR
} from '../actions/types';

const initialState = {
  tests: [],
  test: null,
  loading: true,
  error: {}
}

export default function fn(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TESTS:
      return {
        ...state,
        tests: payload,
        loading: false
      };
    case DELETE_TEST:
      return {
        ...state,
        posts: state.tests.filter(test => test._id !== payload),
        loading: false
      };
    case TEST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
