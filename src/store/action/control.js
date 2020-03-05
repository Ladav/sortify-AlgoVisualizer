import * as algo from '../../util/algorithm/index';
import { stopSorting } from '../../util/controlMethods';

export const runSort = () => {
    return async (dispatch, getState) => {
        if(getState().sorting) {
            dispatch(stopSorting());
            return undefined;
        }
        
        await algo[getState().algorithm.value](dispatch, getState);
    };
};


// export const runSort = () => {
//     return (dispatch, getState) => {
//         if (getState().sorting) {
//             dispatch(stopSorting());
//             return undefined;
//         }
//         dispatch(startSorting());
//         dispatch(toggleSpeedDisplay());

//         const activeAlgo = getState().algorithm.value;
//         algo[activeAlgo].init();
//         algo[activeAlgo].initMiscellaneous();

//         const [size, speed] = [getState().slider.size.value - 1, getState().slider.speed.value];
//         let counter = 0;
//         const iterations = algo[activeAlgo].condition(size);

//         // console.log(' size ' + size+ ' speed' + speed);
//         const interval = setInterval(() => {
//             // console.log('counter ' + counter + ' size*size ' + size*size + ' i ' + i + ' j ' + j + ' length of inputArray is ' + size);
//             const updatedArr = algo[activeAlgo].sort([...getState().inputArray]);
//             dispatch({ type: actionTypes.UPDATE_ARRAY, updatedArr });

//             counter++;
//             if (counter > iterations || getState().stop) {
//                 clearInterval(interval);
//                 dispatch(stopSorting());
//                 dispatch(setStopOff());
//                 dispatch(toggleSpeedDisplay());
//                 return undefined;
//             }
//         }, speed);
//     };
// };

// async function wait(ms) {
//     return new Promise(resolve => {
//         setTimeout(resolve, ms);
//     });
// };

// const REQUIREMENTS = {
//     bubble: (arr, counter) => false,
//     bubbleImproved: (arr, counter, len = arr.length) => {
//         if(counter === len/)
//         algo.bubbleImproved.reInitMiscellaneous();
//     }
// }