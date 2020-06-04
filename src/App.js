import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './stylesheets/App.css';
import Routes from './routes';


const url = 'http://localhost:3000'

function App(props) {

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
   } 


  return (
    <div>
      {/* <SideNav navItems={navItems} />
      <TopNav /> */}
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
	addAllCelebs: (data) => dispatch({ type: 'ADD_CELEBS', payload: data })
});

export default withRouter(connect(sToP, dToP)(App));