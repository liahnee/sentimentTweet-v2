import React, { useState, useEffect } from 'react';
import './stylesheets/App.css';
import Routes from './routes';
import { connect } from 'react-redux';


const url = 'http://localhost:3000'

function App() {

  useEffect(() => {
    getAllCelebs();
  }, [])

  const getAllCelebs = async () => {
    await fetch(url + '/celebs')
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      addAllCelebs(data);
    })
   } 


  return (
    <React.Fragment>
      {/* <SideNav navItems={navItems} />
      <TopNav /> */}
      <Routes />
  </React.Fragment>
  );
}

const sToP = (state) => {
	return {
	};
};

const dToP = (dispatch) => ({
	addAllCelebs: (data) => dispatch({ type: 'ADD_ALL_CELEBS', payload: data })
});

export default withRouter(connect(sToP, dToP)(App));