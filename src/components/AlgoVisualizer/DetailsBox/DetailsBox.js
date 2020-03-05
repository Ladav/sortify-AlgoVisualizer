import React from 'react';

import classes from './DetailsBox.css';

const detailsBox = (props) => {
    return (
        <div className={[classes.DetailsBox, 'detailsBox'].join(' ')} onMouseDown={props.mouseDown}
            style={{ left: `${props.pos.left}px`, top: `${props.pos.top}px` }}>
            <div className={classes.Box} name="comparison">
                <label className={classes.Label}>Comparisons</label>
                :
                <p className={classes.Value}>{props.details.comparison}</p>
            </div>
            <div className={classes.Box} name="access">
                <label className={classes.Label}>Array accessed</label>
                :
                <p className={classes.Value}>{props.details.arrayAccess}</p>
            </div>
        </div>
    );
};

export default detailsBox;