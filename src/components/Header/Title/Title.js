import React from 'react';
import companyLogo from '../../../assets/sortify.svg';

import classes from './Title.css';

const logo = (props) => {
    return (
        <div className={classes.Title}>
            <div className={classes.Logo}>
                <img src={companyLogo} alt="Logo" />
            </div>
            <h3>Sortify-Sorting Algo Visualizer</h3>
        </div>
    );
};

export default logo;