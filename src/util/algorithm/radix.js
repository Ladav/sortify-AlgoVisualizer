import { 
    startSorting, 
    stopSorting,
    updateArr,
    setStopOff,
    toggleSpeedDisplay,
    wait,    // wait is not a action
    highlightActive,
    highlightSorted,
    incComparisonCount,
    incAccessCount
} from '../controlMethods';

const exit = (dispatch) => {
    dispatch(stopSorting());
    dispatch(toggleSpeedDisplay());
    dispatch(setStopOff());
};

const getDigit = (num, place) => {
    return Math.floor((num % Math.pow(10, place)) / Math.pow(10, place - 1));
};

const digitCount = (num) => {
    return Math.floor(Math.log10(num)) + 1;
};

const mostDigits = (arr) => {
    let maxdigits = 0, digits = 0;
    arr.forEach(num => {
        digits = digitCount(num);
        if (maxdigits < digits) maxdigits = digits;
    });
    return maxdigits;
};

export const radix = async (dispatch, state) => {
    let arr = [...state().inputArray];
    const speed = state().slider.speed.value;
    const maxDigitCount = mostDigits(arr);
    dispatch(incAccessCount(arr.length));    // array accessed for find the maximum no. of digit
    dispatch(incComparisonCount(arr.length));

    dispatch(startSorting());
    dispatch(toggleSpeedDisplay());
    //sorted elements
    for (let i = 1; i <= maxDigitCount; i++) {
        const backet = [];
        const base = 10; // so we can have digits starting from 0 to 9
        for (let j = 0; j < base; j++) backet.push([]);
        
        for (let j = 0; j < arr.length; j++) {
            // 2.if user change the size of array while the algo is running then stop it execution
            if(state().stop) {
                exit(dispatch);
                return undefined;
            }
            
            let digit = getDigit(arr[j], i);
            // highlight the bar's where comparision is being made(there index is being saved)
            dispatch(highlightActive([j,-1]));
            backet[digit].push(arr[j]);
            dispatch(incAccessCount(2));    //  array accessed 2
            await wait(speed);
        }
        arr = [].concat(...backet); 
        dispatch(incAccessCount(arr.length));   // array accessed by concat to concatinate the elments
        dispatch(updateArr(arr));
    }
    
    // clean the active bar's as the whole array is sorted
    dispatch(highlightActive([-1,-1]));
    // hightlight the whole array return sorted element
    for(let i = 0; i < arr.length; i++) {
        dispatch(highlightSorted([i]));
        await wait(speed);
    };
    exit(dispatch);
};