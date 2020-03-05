import { 
    startSorting, 
    stopSorting,
    updateArr,
    setStopOff,     // stop is turned on, in case use presses the pause btn, or increase the size of array
    toggleSpeedDisplay,
    wait    // wait is not a action
} from '../controlMethods';

const exit = (dispatch) => {
    dispatch(stopSorting());
    dispatch(toggleSpeedDisplay());
    dispatch(setStopOff());
    return undefined;
}
let x = 1;
export const bubbleImproved = async (dispatch, state) => {
    const arr = state().inputArray;
    const speed = state().slider.speed.value;
    let noswap;
    
    dispatch(startSorting());
    dispatch(toggleSpeedDisplay());
    for(let i = 0; i < arr.length - 1; i++) {
        noswap = true;
        for(let j = 0; j < arr.length - (i+1); j++) {
            if(state().stop) {      // if user change the size of array while the algo is running then stop it execution
                exit(dispatch);
                return undefined;
            }

            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                
                dispatch(updateArr(arr));
                await wait(speed);
                noswap = false;
            }
            console.log(x++)
        }
        if(noswap) dispatch(stopSorting());
    }
    exit(dispatch);
};