import {
    EVENT, REQUEST
} from '../constants';
import get from "lodash/get";
import {createSelector} from 'reselect';
import {merge} from '../utils';

const initialState = {}
export default (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case REQUEST + EVENT:
            return {
                ...state,
                eventsSelect: payload
            }
        default:
            return state;
    }
};

export const stateSelector = (state) => get(state, 'events', {});
export const selectedEventSelector = createSelector(stateSelector, (reducer) => get(reducer, 'eventsSelect', {}));



