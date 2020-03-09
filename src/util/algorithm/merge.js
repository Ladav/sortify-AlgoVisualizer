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

let speed;

export const merge = (dispatch, state, newArr, start, end) => {
    const arr = newArr||[...state().inputArray];
    speed = state().slider.speed.value;

    dispatch(startSorting());
    dispatch(toggleSpeedDisplay());

    // if user change the size of array while the algo is running then stop it execution
    if (state().stop) {
        return exit(dispatch);
    }

    if (arr.length === 1) return {arr,start,end};
    let mid = (arr.length / 2) | 0;

    // 1.highlight the bar's where division is being made(there index is being saved)
    dispatch(highlightActive([mid, -1]));

    let left = merge(dispatch, state, arr.slice(0, mid), 0, mid-1);
    dispatch(incAccessCount(mid));    // 4. array accessed for swapping so inc by 4

    let right = merge(dispatch, state, arr.slice(mid, arr.length), mid, arr.length-1);
    dispatch(incAccessCount(arr.length - mid));    // 4. array accessed for swapping so inc by 4

    const curArr = mergeArray(dispatch, state, left, right);    // left ={ arr, start, end}
    if (state().inputArray.length === curArr.length) {
        exit(dispatch);
    }
    return {curArr, left, right};
};

const mergeArray = async (dispatch, state, arr1, arr2) => {   
    console.log(arr1, arr2)
    let newArr = [];
    let i = 0, j = 0;
    while (i < arr1.arr.length && j < arr2.arr.length) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++;

            // highlight the bar's where comparision is being made(there index is being saved)
            dispatch(highlightActive([arr1.arr.start + i, arr2.start + j]));
            
            dispatch(incComparisonCount(1));
            dispatch(incAccessCount(3));
            // if user change the size of array while the algo is running then stop it execution
            if (state().stop) {
                return exit(dispatch);
            }

            await wait(speed);
        }
        else {
            newArr.push(arr2[j]);
            j++;
            dispatch(incAccessCount(1));
            // if user change the size of array while the algo is running then stop it execution
            if (state().stop) {
                return exit(dispatch);
            }

            await wait(speed);
        }
    }
    while (i < arr1.length) {
        newArr.push(arr1[i]);
        i++;
        
        dispatch(highlightActive([arr1.arr.start + i, -1]));
        
        dispatch(incAccessCount(1));
        // if user change the size of array while the algo is running then stop it execution
        if (state().stop) {
            return exit(dispatch);
        }
        
        await wait(speed);
    }
    while (j < arr2.length) {
        newArr.push(arr2[j]);
        j++;
        
        dispatch(highlightActive([arr1.arr.start + j, -1]));
        
        dispatch(incAccessCount(1));
        // if user change the size of array while the algo is running then stop it execution
        if (state().stop) {
            return exit(dispatch);
        }
        
        await wait(speed);
    }
    return newArr;
};