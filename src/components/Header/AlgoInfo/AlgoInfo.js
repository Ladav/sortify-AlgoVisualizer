import React from 'react';

import classes from './AlgoInfo.css';
const LINK = {
    bubble: 'https://en.wikipedia.org/wiki/Bubble_sort',
    bubbleImproved: 'https://en.wikipedia.org/wiki/Bubble_sort',
    insertion: 'https://en.wikipedia.org/wiki/Insertion_sort',
    selection: 'https://en.wikipedia.org/wiki/Selection_sort',
    quick: 'https://en.wikipedia.org/wiki/Quicksort',
    radix: 'https://en.wikipedia.org/wiki/Radix_sort'
}

const elements = (props) => {
    return (
        <div className={classes.AlgoInfo__Container}>
            <div className={classes.AlgoInfo}>
                <h3>{props.algoName}</h3>
                <a href={LINK[props.algoName]} target="_blank" rel="noopener noreferrer">
                    <i className={classes.InformationIcon} title="See Algorithm">i</i>
                </a>
            </div>
        </div>
    );
};

export default elements;