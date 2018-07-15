import {
    REQUEST, UPDATE, ESTABLISHMENT, TITLE, FILTER, CITY
} from '../constants';
import {createSelector} from 'reselect'

const initialState = {
    isLoaded: false
}

export default (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case REQUEST + ESTABLISHMENT:
            return {
                ...state,
                establishmentSelect: payload,
                dataUnchangable: payload,
                isLoaded: true,
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
        case UPDATE + FILTER + TITLE:
            return {
                ...state,
                filterTitle: payload
            }
        default:
            return state;
    }
};

export const stateSelector = (state) => state['establishment'];
export const currentSelector = createSelector(stateSelector, (establishment) => establishment['establishmentSelect']);


