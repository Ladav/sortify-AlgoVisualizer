import React from 'react';

import Algos from './Algos/Algos';
import Control from './Control/Control';
import classes from './Sidebar.css';

const sidebar = (props) => {
    return (
        <div className={classes.Sidebar}>
            <Control />
            <Algos />
        </div>
    );
};

export default sidebar;