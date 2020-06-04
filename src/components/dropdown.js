import React, { useState, useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react'


const Dropdown = (props) => {

    return (
        <Dropdown clearable selection options={props.options} onChange={props.handleChange} />
    )
};

export default Dropdown;