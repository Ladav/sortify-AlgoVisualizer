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

let speed = 0;
export const quick = async (dispatch, state) => {
    const arr = [...state().inputArray];
    speed = state().slider.speed.value;

    dispatch(startSorting());
    dispatch(toggleSpeedDisplay());
    
    await quickSort(dispatch, state, arr);
    return exit(dispatch);
};
const quickSort = async (dispatch, state, arr, low = 0, high = arr.length-1) => {
    if(state().stop) return;
    
    let pivotIndex;
    if(low < high) {
        await partition(dispatch, state, arr, low, high).then(res => pivotIndex = res);
        // highlight the sorted (pivot) element
        dispatch(highlightSorted([pivotIndex]));
        
        await quickSort(dispatch, state, arr, low, pivotIndex - 1);
        await quickSort(dispatch, state, arr, pivotIndex + 1, high);
    }
    if(low >= high) dispatch(highlightSorted([high]));
};

const partition = async (dispatch, state, arr, low = 0, high = arr.length-1) => { 
    let i = low, j = high;
    const pivot = arr[low];
    
    while (i < j) {
        if(state().stop) return;
        do {
            i++;
            dispatch(highlightActive([i,j]));
            dispatch(incComparisonCount(1));
            await wait(speed);
            
        } while (arr[i] < pivot )
        
        while (arr[j] > pivot) {                          
            j--;
            dispatch(highlightActive([i,j]));
            dispatch(incComparisonCount(1));
            await wait(speed);
        }
        if(i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            dispatch(incAccessCount(4));
            dispatch(updateArr(arr));
        }
    }
    [arr[low], arr[j]] = [arr[j], arr[low]];
    dispatch(incAccessCount(4));
    dispatch(updateArr(arr));
    
    return new Promise((res,rej) => res(j));
};