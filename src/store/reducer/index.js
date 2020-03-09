import * as actionTypes from '../action/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    inputArray: [344, 4, 32, 232, 45, 67, 222, 42, 433, 90, 122, 343, 232, 49, 55, 290, 500],
    sortedBar: [],  // there index will be used
    activeBar: [],
    algorithm: {
        algos: ['bubble', 'bubbleImproved', 'insertion', 'selection', 'radix', 'quick'],
        value: 'bubble'
    },
    slider: {
        speed: { value: 400, max: 2000, min: 1, disabled: false },
        size: { value: 20, max: 300, min: 2, disabled: false }
    },
    bar: { width: 20, margin: 4 },
    arrayType: {
        options: ['sorted', 'unSorted', 'partiallySorted'],
        value: 'unSorted',
    },
    sorting: false,
    stop: false,
    details: {
        comparison: 0,
        arrayAccess: 0
    }
};

const sizeSliderChanged = (state, action) => {
    const updatedSlider = updateObject(state.slider, {...state.slider});
    updatedSlider[action.name].value = +action.value;
    const updatedBar = updateObject(state.bar, { width: action.bar.width, margin: action.bar.margin });
    const updatedDetails = updateObject(state.details, { comparison: 0, arrayAccess: 0 });
    return updateObject(state, {
        inputArray: [...action.updatedArr],
        activeBar: [], sortedBar: [],  // emptying the active and sorted bars
        slider: updatedSlider,
        bar: updatedBar,
        stop: true,
        details: updatedDetails
    });
};
const speedSliderChanged = (state, action) => {
    const updatedSlider = updateObject(state.slider, { ...state.slider });
    updatedSlider[action.name].value = +action.value;
    return updateObject(state, { slider: updatedSlider});
};
const startSorting = (state, action) => {
    const updatedDetails = updateObject(state.details, { comparison: 0, arrayAccess: 0 });
    return updateObject(state, {
        sorting: true, stop: false,
        details: updatedDetails
    });
};
const stopSorting = (state, action) => {
    return updateObject(state, { sorting: false, stop: true });
};
const updateArray = (state, action) => {
    return updateObject(state, { inputArray: action.updatedArr });
};
const setStopOff = (state, action) => {
    return updateObject(state, { stop: false });
};
const highlightBars = (state, action) => {
    return updateObject(state, { activeBar: [...action.bars] });
};
const updateSortedBars = (state, action) => {
    return { ...state, sortedBar: [...state.sortedBar, ...action.bars] };
};
const toggleSpeed = (state, action) => {
    const updatedSpeed = updateObject(state.slider.speed, {disabled: !state.slider.speed.disabled});
    const updatedSlider = updateObject(state.slider, { speed: updatedSpeed });
    return updateObject(state, { slider: updatedSlider });
};
const arrTypeChanged = (state, action) => {
    const updatedBar = updateObject(state.bar, { width: action.bar.width, margin: action.bar.margin });
    const updatedArrayType = updateObject(state.arrayType, {value: action.arrayType});
    const updatedDetails = updateObject(state.details, { comparison: 0, arrayAccess: 0 });
    return {
        ...state,
        inputArray: action.updatedArr,
        activeBar: [], sortedBar: [],  // emptying the active and sorted bars
        bar: updatedBar,
        arrayType: updatedArrayType,
        details: updatedDetails
    };
};
const changeAlgorithm = (state, action) => {
    const updatedAlgorithm = updateObject(state.algorithm, {value: action.name});
    const updatedDetails = updateObject(state.details, { comparison: 0, arrayAccess: 0 });
    return {
        ...state,
        inputArray: action.updatedArr,
        activeBar: [], sortedBar: [],  // emptying the active and sorted bars
        algorithm: updatedAlgorithm,
        details: updatedDetails
    };
};
const updateComparisonCount = (state, action) => {
    const updatedDetails = updateObject(state.details, {comparison: state.details.comparison + action.count});
    return updateObject(state, {details: updatedDetails });
};
const updateAccessCount = (state, action) => {
    const updatedDetails = updateObject(state.details, {arrayAccess: state.details.arrayAccess + action.count});
    return updateObject(state, {details: updatedDetails });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SLIDE_SIZE: return sizeSliderChanged(state, action);
        case actionTypes.SLIDE_SPEED: return speedSliderChanged(state, action);
        case actionTypes.UPDATE_ARRAY: return updateArray(state, action);
        case actionTypes.START_SORTING: return startSorting(state, action);
        case actionTypes.STOP_SORTING: return stopSorting(state, action);
        case actionTypes.SET_STOP_OFF: return setStopOff(state, action);
        case actionTypes.TOGGLE_SPEED: return toggleSpeed(state, action);
        case actionTypes.ARRAY_TYPE_CHANGED: return arrTypeChanged(state, action);
        case actionTypes.CHANGE_ALGORITHM: return changeAlgorithm(state, action);
        case actionTypes.ACTIVE_BAR: return highlightBars(state, action);
        case actionTypes.SORTED_BAR: return updateSortedBars(state, action);
        case actionTypes.INCREASE_COMPARISON_COUNT: return updateComparisonCount(state, action);
        case actionTypes.INCREASE_ACCESS_COUNT: return updateAccessCount(state, action);
        default: return state;
    }
};

export default reducer;