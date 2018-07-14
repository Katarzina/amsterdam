import {
    LOAD, INFO, COORDINATE
} from '../constants';

export default (state, action) => {
    const {type, payload} = action
    //console.log(type, payload)
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

export const coordinateSelection = (state) => state['details'];
export const restaurantDetailsSelection = (state) => state['details.restaurantDetails'];

