import React from 'react';

import classes from './Slider.css';

const slider = (props) => {
    return (
        <div className={classes.Slider__Container}>
            <span className={classes.Label}>{props.name}</span>
            <span className={classes.Left}>{props.leftValue || 'dec'}</span>
            <span>
                <input
                    type="range"
                    className={classes.Slider}
                    min={props.minValue}
                    max={props.maxValue}
                    title={props.name === "size"? props.currentValue : null}
                    value={props.currentValue}
                    name={props.name}
                    disabled={props.disabled}
                    onChange={props.changed} />
            </span>
            <span className={classes.Right}>{props.rightValue || 'inc'}</span>

        </div>);
};

export default slider;