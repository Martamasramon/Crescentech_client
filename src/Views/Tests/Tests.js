import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TestItem from './TestItem';
import MyMap from './Map';
import { connect } from 'react-redux';
import { getTests } from '../../actions/test';
import './tests.css';

// TO-DO
// Get location from phone as lat vs lng

const Tests = ({ getTests, test:{tests, loading} }) => {
  useEffect(() => {
    getTests();
  }, [getTests]);

  const testLocations = [];
  let lat = 0;
  let lng = 0;
  let count = 0;

  tests.forEach((test) => {
    let testColour = "White";
    if (test.result === "Positive") testColour = "Green";
    else if (test.result === "Negative") testColour = "Red";

    testLocations.push({
      colour: testColour,
      coordinates: {
        lat: test.lat,
        lng: test.lng
      }
    });

    lat = lat + test.lat;
    lng = lng + test.lng;
    count = count + 1;
  });

  const center = {
    lat: lat/count,
    lng: lng/count,
  }

  // Change h1 to spinner
  return (loading ? (<h1>Loading</h1>) : (
      <div className="tests">
        <h1 className="tests-title">Test Result History</h1>
        <MyMap center={center} locs={testLocations} zoomLevel={18} />
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
