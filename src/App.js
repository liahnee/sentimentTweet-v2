import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './stylesheets/App.css';
import Routes from './routes';


const url = 'http://localhost:3000'

function App(props) {;

  useEffect(() => {
    getAllCelebs();
  }, [])

  const getAllCelebs = async () => {
    await fetch(url + '/celebs')
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      props.addAllCelebs(data);
    })
    .then(() => {
      props.allCelebsLoading();
    })
   } 


  return (
    <div>
      <Routes />
  </div>
  );
}

const sToP = (state) => {
	return {
    allCelebs: state.manageCelebs.allCelebs
	};
};

const dToP = (dispatch) => ({
  addAllCelebs: (data) => dispatch({ type: 'ADD_CELEBS', payload: data }),
  allCelebsLoading: () => dispatch({ type: 'DONE', payload:false})
});

export default withRouter(connect(sToP, dToP)(App));