import {
    EVENT, REQUEST
} from '../constants';

export default (state, action) => {
    const {type, payload} = action
    //console.log(type, payload)
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

export const eventsSelection = (state) => state['events'];



