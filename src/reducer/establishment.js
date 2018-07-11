import {
    REQUEST, SUCCESS, UPDATE, ESTABLISHMENT, FILTER
} from '../constants';
import {createSelector} from 'reselect'

const initialState = {
    isLoaded: false
}

export default (state = initialState, action) => {
    const {type, payload} = action
    console.log(type, payload)
    switch (type) {
        case REQUEST + SUCCESS:
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

        default:
            return state;
    }
};

export const stateSelector = (state) => state['establishment'];
export const currentSelector = createSelector(stateSelector, (establishment) => establishment['establishmentSelect']);



