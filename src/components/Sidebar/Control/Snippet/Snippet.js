import React, { Component } from 'react';

import * as code from '../../../../util/sampleCode/index';
import classes from './Snippet.css';

class Snippet extends Component {
    componentDidMount() {
        console.log('[Snippet.js] componentDidMount');
        const $code = document.querySelector('.code');
        $code.textContent = ''; 
        $code.insertAdjacentHTML('afterbegin',code[this.props.algoName]());
    };

    render() {
        return (
            <div className={classes.Snippet}>
                <p className={[classes.Code, "code"].join(' ')}>
                </p>
            </div>
        );
    }
};

export default Snippet;