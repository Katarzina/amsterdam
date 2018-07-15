import {
    LOAD, INFO, COORDINATE
} from '../constants';
import get from "lodash/get"
import {createSelector} from 'reselect'

export default (state = null, action) => {
    const {type, payload} = action
    switch (type) {
        case LOAD + INFO:
            return {
                ...state,
                restaurantDetails: payload
            }
        case LOAD + COORDINATE:
            return {
                ...state,
                coordinate: payload
            }
        default:
            return state;
    }
};

export const stateSelector = (state) => get(state, 'details', {});
export const restaurantDetailsSelector = createSelector(stateSelector, (reducer) => get(reducer, 'restaurantDetails', {}));
export const coordinateSelector = createSelector(stateSelector, (reducer) => get(reducer, 'coordinate', {}));