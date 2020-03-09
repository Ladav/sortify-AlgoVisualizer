import React from 'react';
import { connect } from 'react-redux';

import classes from './Header.css';
import Title from './Title/Title';
import Options from './Options/Options';
import AlgoInfo from './AlgoInfo/AlgoInfo';
import * as actionCreator from '../../store/action/index';

const header = (props) => {
    return (
        <div className={classes.Header}>
            <Title />
            <Options arrayType={props.arrayType}
                arraySelected={props.arraySelected}
                sorting={props.sorting} />
            <AlgoInfo algoName={props.algo} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        arrayType: state.arrayType,
        algo: state.algorithm.value,
        sorting: state.sorting
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        arraySelected: (type) => dispatch(actionCreator.arrayTypeChanged(type))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(header);