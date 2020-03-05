import React from 'react';

import classes from './Algo.css';
const algo = (props) => {
    const attachedClasses = [classes.Algo];
    if (props.active) attachedClasses.push(classes.Active);

    return <h3 className={attachedClasses.join(' ')}
        onClick={() => props.selected(props.name)}>{props.name}</h3>
};

export default algo;