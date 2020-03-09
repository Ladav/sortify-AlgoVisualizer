import {
    startSorting,
    stopSorting,
    updateArr,
    setStopOff,     // stop is turned on, in case use presses the pause btn, or increase the size of array
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
    return undefined;
}

export const bubbleImproved = async (dispatch, state) => {
    const arr = [...state().inputArray];
    const speed = state().slider.speed.value;
    let i, j, noswap;

    dispatch(startSorting());
    dispatch(toggleSpeedDisplay());
    for (i = 0; i < arr.length - 1; i++) {
        noswap = true;
        for (j = 0; j < arr.length - (i + 1); j++) {
            // 1.highlight the bar's where comparision is being made(there index is being saved)
            dispatch(highlightActive([j, j + 1]));

            // 2.if user change the size of array while the algo is running then stop it execution
            if (state().stop) {
                return exit(dispatch);
            }

            // 3. sorted elements
            if (arr[j] > arr[j + 1]) {  // 4. array accessed for comparison that why inc by 2
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];    // 4. array access 4 times for swaping

                dispatch(incAccessCount(4));    // 4. array accessed for swapping so inc by 4
                dispatch(updateArr(arr));
                noswap = false;
            }

            // 4. Comparison and Access count
            dispatch(incComparisonCount(1)); // 4. In each iteration one comparison is being made
            dispatch(incAccessCount(2));
            await wait(speed);
        }
        // 5. return sorted element
        dispatch(highlightSorted([j]));

        if (noswap) {
            // clean the active bar's as the whole array is sorted
            dispatch(highlightActive([-1, -1]));
            // hightlight the whole array return sorted element
            for (let x = arr.length-i; x >= 0; x--) {
                dispatch(highlightSorted([x]));
                await wait(speed);
            };
            dispatch(stopSorting());
            return exit(dispatch);
        }
    }
    exit(dispatch);
};