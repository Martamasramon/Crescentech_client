import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TestItem from './TestItem';
import { connect } from 'react-redux';
import { getTests } from '../../actions/test';
import './tests.css';


const Tests = ({ getTests, test:{tests, loading} }) => {
  useEffect(() => {
    getTests();
  }, [getTests]);

  // Change h1 to spinner
  return (loading ? (<h1>Loading</h1>) : (
      <div className="tests">
        <h1>Test Result History</h1>
        {tests.map((test) => (  <TestItem key={test._id} test={test} /> ))}
      </div>
  ));
};

Tests.propTypes = {
  getTests: PropTypes.func.isRequired,
  test: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  test: state.test
});

export default connect(mapStateToProps, { getTests })(Tests);
