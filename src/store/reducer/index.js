import * as actionTypes from '../action/actionTypes';

const initialState = {
    inputArray: [344, 4, 32, 232, 45, 67, 222, 42, 433, 90, 122, 343, 232, 49, 55, 290, 500],
    sortedBar: [],  // there index will be used
    activeBar: [],
    algorithm: {
        algos: ['bubble', 'bubbleImproved', 'insertion', 'selection', 'radix', 'merge', 'quick'],
        value: 'bubble'
    },
    slider: {
        speed: { value: 400, max: 2000, min: 1, disabled: false },
        size: { value: 20, max: 300, min: 2, disabled: false }
    },
    bar: { width: 20, margin: 2 },
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
    const updatedState = {
        ...state,
        inputArray: [...action.updatedArr],
        activeBar: [],  // emptying the active and sorted bars
        sortedBar: [],
        slider: {
            ...state.slider
        },
        bar: { width: action.bar.width, margin: action.bar.margin },
        stop: true
    };
    updatedState.slider[action.name].value = +action.value;
    return updatedState;
};
const speedSliderChanged = (state, action) => {
    const updatedSlider = {
        ...state,
        slider: { ...state.slider }
    };

    updatedSlider.slider[action.name].value = +action.value;
    return updatedSlider;
};
const updateArray = (state, action) => {
    return {
        ...state,
        inputArray: action.updatedArr
    };
};
const startSorting = (state, action) => {
    return {
        ...state,
        sorting: true,
        stop: false
    };
};
const stopSorting = (state, action) => {
    return {
        ...state,
        sorting: false,
        stop: true
    };
};
const setStopOff = (state, action) => {
    return {
        ...state,
        stop: false
    };
};
const toggleSpeed = (state, action) => {
    return {
        ...state,
        slider: {
            ...state.slider,
            speed: {
                ...state.slider.speed,
                disabled: !state.slider.speed.disabled
            }
        }
    };
};
const arrTypeChanged = (state, action) => {
    console.log(action.arrayType)
    return {
        ...state,
        inputArray: action.updatedArr,
        activeBar: [],  // emptying the active and sorted bars
        sortedBar: [],
        bar: { width: action.bar.width, margin: action.bar.margin },
        arrayType: {
            ...state.arrayType,
            value: action.arrayType
        }
    };
};
const changeAlgorithm = (state, action) => {
    return {
        ...state,
        inputArray: action.updatedArr,
        activeBar: [],  // emptying the active and sorted bars
        sortedBar: [],
        algorithm: {
            ...state.algorithm,
            value: action.name
        }
    };
};
const highlightBars = (state, action) => {
    return {
        ...state,
        activeBar: [...action.bars]
    };
};
const updateSortedBars = (state, action) => {
    return {
        ...state,
        sortedBar: [...state.sortedBar, ...action.bars]
    };
};
const updateComparisonCount = (state, action) => {
    return {
        ...state,
        details: {
            ...state.details,
            comparison: state.details.comparison + action.count
        }
    };
};
const updateAccessCount = (state, action) => {
    return {
        ...state,
        details: {
            ...state.details,
            arrayAccess: state.details.arrayAccess + action.count
        }
    };
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