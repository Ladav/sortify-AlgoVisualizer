import * as actionTypes from './actionTypes';
import arrayGenerator from '../../util/arrayGenerator';
import getStyles from '../../util/barStyle';

const buildArray = (value, type) => {
    console.log(type)
    const updatedArr = arrayGenerator[type](value);
    const [width, margin] = getStyles(value);
    return {
        type: actionTypes.ARRAY_TYPE_CHANGED,
        updatedArr,
        bar: {
            width,
            margin
        },
        arrayType: type
    };
};

export const arrayTypeChanged = (arrayType) => {
    return (dispatch, getState) => {
        dispatch(buildArray(getState().slider.size.value, arrayType));
    };
};