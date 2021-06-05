import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TestItem from './TestItem';
import MyMap from './Map';
import { connect } from 'react-redux';
import { getTests } from '../../actions/test';
import './tests.css';


const center ={
  lat: 37.42226,
  lng: -122.08427,
}
const locs = [
  {
    colour: "green",
    coordinates: {
       lat: 37.42226,
       lng: -122.08427,
     }
  },
  {
    colour: "red",
    coordinates: {
      lat: 37.42226,
      lng: -122.08437,
    }
  },
  {
    colour: "green",
    coordinates: {
        lat: 37.42206,
        lng: -122.08415,
      }
  },
  {
    colour: "red",
    coordinates: {
      lat: 37.42212,
      lng: -122.08439,
    }
  },
  {
    colour: "green",
    coordinates: {
      lat: 37.4224,
      lng: -122.084,
    }
  }
];


const Tests = ({ getTests, test:{tests, loading} }) => {
  useEffect(() => {
    getTests();
  }, [getTests]);

  // Change h1 to spinner
  return (loading ? (<h1>Loading</h1>) : (
      <div className="tests">
        <h1>Test Result History</h1>
        <MyMap center={center} locs={locs} zoomLevel={18} />
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
