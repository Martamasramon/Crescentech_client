import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTest } from '../actions/test';

// Make returned html pretty!
const TestItem = ({
  auth,
  deleteTest,
  test: { _id, title, result, user, comments, date, location },
}) => (
  <div>
    <h2>{title}</h2>
    <p>{result}</p>
    <p>Tested on {date}, at {location}</p>
    <p>{comments}</p>
    <button onClick={() => deleteTest(_id)}>Delete</button>
  </div>
);

TestItem.defaultProps = {
  showActions: true
};

TestItem.propTypes = {
  test: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteTest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {deleteTest})(TestItem);
