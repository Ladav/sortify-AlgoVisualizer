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

export const bubble = async (dispatch, state) => {
    const arr = state().inputArray;
    const speed = state().slider.speed.value;
    let i,j;

    dispatch(startSorting());
    dispatch(toggleSpeedDisplay());
    for(i = 0; i < arr.length; i++) {
        for(j = 0; j < arr.length - (i+1); j++) {
            // 1.highlight the bar's where comparision is being made(there index is being saved)
            dispatch(highlightActive([j, j+1]));

            // 2.if user change the size of array while the algo is running then stop it execution
            if(state().stop) {
                exit(dispatch);
                return undefined;
            }

            // 3. sorted elements
            if(arr[j] > arr[j+1]) {   // 4. array accessed for comparison that why inc by 2
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            
                dispatch(incAccessCount(4));    // 4. array accessed for swapping so inc by 4
                dispatch(updateArr(arr));
                await wait(speed);
            }
            
            // 4. Comparison and Access count
            dispatch(incComparisonCount(1)); // 4. In each iteration one comparison is being made
            dispatch(incAccessCount(2));
        }
        // 5. return sorted element
        dispatch(highlightSorted([j]));
    }
    exit(dispatch);
};