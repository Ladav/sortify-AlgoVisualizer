import React from 'react';

import classes from './PlayBtn.css';
const playBtn = (props) => {
    const attachedClasses = [classes.PlayBtn];
    let icon = props.sorting ? <i className="ion-ios-pause"></i> : <i className="ion-ios-play"></i>;
    
    if(props.sorting) {
        attachedClasses.push(classes.Pause);
    }
    return (
        <div className={classes.PlayBtn__container}>
            <button className={attachedClasses.join(' ')} onClick={props.sort}>
                {icon}
            </button>
        </div>
    );
};

export default playBtn;