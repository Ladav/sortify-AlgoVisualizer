import * as actionTypes from './actionTypes';
import arrayGenerator from '../../util/arrayGenerator';

const builtNewArray = (name, value, type) => {
    const updatedArr = arrayGenerator[type](value);
    return {
        type: actionTypes.CHANGE_ALGORITHM,
        name,
        updatedArr
    };
};

export const changeAlgorithm = (name) => {
    return (dispatch, getState) => {
        dispatch(builtNewArray(name, getState().slider.size.value, getState().arrayType.value));
    };
};