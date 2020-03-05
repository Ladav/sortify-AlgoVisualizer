import React from 'react';
import { connect } from 'react-redux';

import Algo from './Algo/Algo';
import * as actionCreator from '../../../store/action/index';
import classes from './Algos.css';

const algo = (props) => {
    let algorithms = props.algorithm.algos.map(algo => {
        return <Algo name={algo}
            active={props.algorithm.value === algo ? true : false}
            key={algo}
            selected={props.changeAlgo} />
    });

    return (
        <div className={classes.Algos__container}>
            <div className={classes.Algos}>
                {algorithms}
            </div>
        </div>);
};

const mapStateToProps = (state) => {
    return { 
        algorithm: state.algorithm };
};
const mapDispatchToProps = (dispatch) => {
    return {
        changeAlgo: (name) => dispatch(actionCreator.changeAlgorithm(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(algo);