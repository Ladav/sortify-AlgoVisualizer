import * as actionTypes from './actionTypes';
import arrayGenerator from '../../util/arrayGenerator';
import getStyles from '../../util/barStyle';

const changeSize = (name, value, type) => {
    console.log(type)
    const updatedArr = arrayGenerator[type](value);
    const [width, margin] = getStyles(value);
    return {
        type: actionTypes.SLIDE_SIZE,
        name,
        value,
        updatedArr,
        bar: {
            width,
            margin
        }
    };
};

const changeSpeed = (name, value) => {
    return {
        type: actionTypes.SLIDE_SPEED,
        name,
        value
    };
};

export const slideChanged = (name, value) => {
    return (dispatch, getState) => {
        // resize the array
        if (name === 'size') dispatch(changeSize(name, value, getState().arrayType.value));
        else dispatch(changeSpeed(name, value));
    };
};