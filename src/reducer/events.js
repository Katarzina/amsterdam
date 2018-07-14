import {
    EVENT, REQUEST
} from '../constants';
import get from "lodash/get";
import {createSelector} from 'reselect';
import {merge} from '../utils';

export default (state, action) => {
    const {type, payload} = action

    switch (type) {
        case REQUEST + EVENT:
            return merge(state, {eventsSelect: payload})
        default:
            return state;
    }
};

export const stateSelector = (state) => get(state, 'events', {});
export const selectedEventSelector = createSelector(stateSelector, (reducer) => get(reducer, 'eventsSelect', {}));


