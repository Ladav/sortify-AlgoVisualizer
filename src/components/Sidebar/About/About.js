import React from 'react';

import classes from './About.css';
import image from '../../Header/Logo/tempLogo.jpg';

const about = (props) => {
    return(
        <div className={classes.About}>
            <img className={classes.Avatar} src={image} alt="avtar" />
            <h3>About</h3>
            <i>&#x1f6c8;</i>            
        </div>
    );
};

export default about;