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

export const selection = async (dispatch, state) => {
    const arr = [...state().inputArray];
    const speed = state().slider.speed.value;
    let i, j, min_index;

    dispatch(startSorting());
    dispatch(toggleSpeedDisplay());
    for (i = 0; i < arr.length; i++) {
        min_index = i;
        for (j = i + 1; j < arr.length; j++) {
            // 1.highlight the bar's where comparision is being made(there index is being saved)
            dispatch(highlightActive([min_index, j]));

            // 2.if user change the size of array while the algo is running then stop it execution
            if (state().stop) {
                exit(dispatch);
                return undefined;
            }

            // 3. sorted elements
            if (arr[min_index] > arr[j]) {
                min_index = j;

                // 4. Comparison and Access count
                dispatch(incAccessCount(2));
            }
            dispatch(incComparisonCount(1)); // 4. In each iteration one comparison is being made
            await wait(speed);
        }
        // 5. return sorted element
        dispatch(highlightSorted([i]));
        // swap the elements
        if (min_index !== i) {
            [arr[min_index], arr[i]] = [arr[i], arr[min_index]];
            
            dispatch(updateArr(arr));
            dispatch(incAccessCount(4));    // 4. array accessed for swapping so inc by 4
        }
    }
    exit(dispatch);
};