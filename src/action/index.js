import {
    REQUEST, SUCCESS, UPDATE, ESTABLISHMENT, FILTER,
} from '../constants'

const A = (type) => (payload) => ({ type, payload });

export const updateArrayEstablishment = A(UPDATE + ESTABLISHMENT);

export const updateFilterEstablishment = A(UPDATE + FILTER + ESTABLISHMENT)

export const receiveQuery = (payload) => ({
    type: REQUEST + SUCCESS,
    payload
})

