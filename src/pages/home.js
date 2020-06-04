import React, { useState, useEffect } from 'react';

import Dropdown from '../components/dropdown';

const options = [
    { key: 'a', value: 'a', text: 'a' },
  { key: 'b', value: 'b', text: 'b' },
]

const Home = (props) => {
    
    const handleChange = (item) => {
        console.log(item)
    }


    return (
        <React.Fragment>
            <Dropdown options={options} handleChange={}/>
        </React.Fragment>
    )
};

export default Home;