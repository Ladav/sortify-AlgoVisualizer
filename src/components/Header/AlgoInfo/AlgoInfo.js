import React from 'react';

import classes from './AlgoInfo.css';
const LINK = {
    bubble: 'https://www.w3schools.com/tags/att_a_target.asp'
}

const elements = (props) => {
    return (
        <div className={classes.AlgoInfo__container}>
            <div className={classes.AlgoInfo}>
                <h3>{props.algoName}</h3>
                <a href={LINK[props.algo]} target="_blank">
                    <i className={classes.InformationIcon} title="See Algorithm">i</i>
                </a>
            </div>
        </div>
    );
};

export default elements;