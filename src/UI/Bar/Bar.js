import React from 'react';

import classes from './Bar.css';

const bar = (props) => {
    return <div
        style={{
            width: `${props.bar.width}px`,
            height: `${props.length}px`,
            margin: `0px ${props.bar.margin}px`,
            background: `${props.color}`
        }}>
    </div>;
};

export default bar;