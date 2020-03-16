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