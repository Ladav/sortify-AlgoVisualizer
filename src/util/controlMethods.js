import * as actionTypes from '../store/action/actionTypes';

export const startSorting = () => {
    return { type: actionTypes.START_SORTING };
}
export const stopSorting = () => {
    return { type: actionTypes.STOP_SORTING };
}
export const updateArr = (arr) => {
    return { type: actionTypes.UPDATE_ARRAY, updatedArr: [...arr] };
}
export const setStopOff = () => {
    return { type: actionTypes.SET_STOP_OFF };
}
export const toggleSpeedDisplay = () => {
    return { type: actionTypes.TOGGLE_SPEED };
}
export const wait = async (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
};
export const highlightActive = (bars) => {
    return {
        type: actionTypes.ACTIVE_BAR,
        bars
    };
};
export const highlightSorted = (bars) => {
    return {
        type: actionTypes.SORTED_BAR,
        bars
    };
};
export const incComparisonCount = (count) => {
    return {
        type: actionTypes.INCREASE_COMPARISON_COUNT,
        count
    };
};
export const incAccessCount = (count) => {
    return {
        type: actionTypes.INCREASE_ACCESS_COUNT,
        count
    };
};