import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// import Dropdown from '../components/dropdown';
import { Dropdown } from 'semantic-ui-react';


const options = [
    { key: 'a', value: 'a', text: 'a' },
  { key: 'b', value: 'b', text: 'b' },
]

const Home = (props) => {
    
    const handleChange = (item) => {
        console.log(item)
    }

    const options = () => {
        console.log('props', props)
       return props.state.allCelebs.map(obj => {
           return {key: obj.twitter_id, value: obj.twitter_id, text: obj.name}
       })
    }

    return (
        <div>
             <Dropdown clearable fluid search selection options={options()} onChange={handleChange} />
        </div>
    )
};

const sToP = (state) => {
	return {
    allCelebs: state.manageCelebs.allCelebs
	};
};

const dToP = (dispatch) => ({
	addAllCelebs: (data) => dispatch({ type: 'ADD_CELEBS', payload: data })
});

export default connect(sToP, dToP)(Home);