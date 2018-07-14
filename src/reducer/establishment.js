import {
    REQUEST, UPDATE, ESTABLISHMENT, EVENT, FILTER, LOAD, INFO, COORDINATE
} from '../constants';
import {createSelector} from 'reselect'

const initialState = {
    isLoaded: false
}

export default (state = initialState, action) => {
    const {type, payload} = action
    //console.log(type, payload)
    switch (type) {
        case REQUEST + ESTABLISHMENT:
            return {
                ...state,
                establishmentSelect: payload,
                dataUnchangable: payload,
                isLoaded: true,
            }
        case REQUEST + EVENT:
            return {
                ...state,
                eventsSelect: payload
            }
        case UPDATE + ESTABLISHMENT:
            return {
                ...state,
                establishmentSelect: payload
            }
        case UPDATE + FILTER + ESTABLISHMENT:
            return {
                ...state,
                establishmentSelect: payload
            }
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

export const stateSelector = (state) => state['establishment'];
export const currentSelector = createSelector(stateSelector, (establishment) => establishment['establishmentSelect']);
export const eventSelector = createSelector(stateSelector, (establishment) => establishment['eventSelect']);


