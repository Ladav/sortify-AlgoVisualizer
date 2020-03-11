import React from 'react';

import classes from './PlayBtn.css';
import play from '../../../../assets/play.svg';
import pause from '../../../../assets/pause.svg';

const playBtn = (props) => {
    const attachedClasses = [classes.PlayBtn];
    if (props.sorting) {
        attachedClasses.push(classes.Pause);
    }
    return (
        <div className={classes.PlayBtn__container}>
            <button className={attachedClasses.join(' ')} onClick={props.sort}>
                <img src={props.sorting ? pause : play} alt="Logo" />
            </button>
        </div>
    );
};

export default playBtn;