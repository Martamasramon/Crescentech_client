import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTest } from '../../actions/test';
import './tests.css';


const TestItem = ({
  auth,
  deleteTest,
  test: { _id, title, result, user, comments, date, location },
}) => (
  <div className="card card-test">
    <h2>{title}</h2>
    <p><b>{result}</b></p>
    <p>Tested on {date}, at {location}</p>
    <p><i>{comments}</i></p>
    <div className="div-button-delete">
      <button className="btn test-delete" onClick={() => deleteTest(_id)}>Delete</button>
    </div>
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
