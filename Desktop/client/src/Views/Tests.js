import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import TestItem from './TestItem';
import { connect } from 'react-redux';
import { getTests } from '../actions/test';

const Tests = ({ getTests, test:{tests, loading} }) => {
  useEffect(() => {
    getTests();
  }, [getTests]);

  // Change h1 to spinner
  return loading ? (<h1>Loading</h1>) : (
    <Fragment>
      <h1>Test Result History</h1>

      <div className="tests">
      {tests.map((test) => (  <TestItem key={test._id} test={test} /> ))}
      </div>
    </Fragment>
  );
};

Tests.propTypes = {
  getTests: PropTypes.func.isRequired,
  test: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  test: state.test
});

export default connect(mapStateToProps, { getTests })(Tests);
