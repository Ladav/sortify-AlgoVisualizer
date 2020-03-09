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

export const insertion = async (dispatch, state) => {
    const arr = [...state().inputArray];
    const speed = state().slider.speed.value;
    let i, j, cur;

    dispatch(startSorting());
    dispatch(toggleSpeedDisplay());
    for(i = 1; i < arr.length; i++) {
        cur = arr[i];
        for(j = i-1; j >= 0 && arr[j] > cur; j--) {
            // 1.highlight the bar's where comparision is being made(there index is being saved)
            dispatch(highlightActive([j, j+1]));

            // 2.if user change the size of array while the algo is running then stop it execution
            if(state().stop) { 
                return exit(dispatch);
            }

            // 3. sorted elements
            arr[j+1] = arr[j];
            dispatch(updateArr(arr));
            dispatch(incComparisonCount(1));
            await wait(speed);

        }
        arr[j+1] = cur;
        dispatch(updateArr(arr));
        dispatch(incAccessCount(4));    // 4. array accessed for swapping so inc by 4
    }

    // clean the active bar's as the whole array is sorted
    dispatch(highlightActive([-1,-1]));
    // highlight sorted element
    for(i = 0; i < arr.length; i++) {
        dispatch(highlightSorted([i]));
        await wait(speed);
    };
    exit(dispatch);
};