import React, { useState, useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react';

import withLoading from '../hoc/loading';

const DropdownComponent = (props) => {

    return (
        <div>
            <Dropdown clearable fluid search selection options={props.options} onChange={props.handleChange} />
        </div>
        
    )
};

export default withLoading(DropdownComponent);