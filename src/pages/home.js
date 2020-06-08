import React from 'react';
import { connect } from 'react-redux';

// import Dropdown from '../components/dropdown';
import { Dropdown } from 'semantic-ui-react';

const Home = (props) => {



    
    const handleChange = (e, item) => {
        const id = item.value;
        console.log(id)
        props.selectCeleb(id);

    }

    const options = () => {
       return props.allCelebs.map(obj => {
           const { name, twitter_id, id } = obj;
           return {key: twitter_id, value: id, text: name}
       })
    }

    return (
        <div>
             <Dropdown clearable fluid search selection options={options()} onChange={handleChange} isLoading={props.allCelebsLoading}/>
        </div>
    )
};

const sToP = (state) => {
	return {
    allCelebs: state.manageCelebs.allCelebs,
    allCelebsLoading: state.manageLoading.allCelebsLoading,
    selectedCeleb: state.manageCelebs.celeb
	};
};

const dToP = (dispatch) => ({
    addAllCelebs: (data) => dispatch({ type: 'ADD_CELEBS', payload: data }),
    selectCeleb: (data) => dispatch({ type: 'SELECT_CELEB', payload: data})
});

export default connect(sToP, dToP)(Home);