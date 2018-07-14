import {
    UPDATE, ESTABLISHMENT, FILTER, LOAD , INFO, COORDINATE
} from '../constants'

const A = (type) => (payload) => ({ type, payload });

export const updateArrayEstablishment = A(UPDATE + ESTABLISHMENT);

export const updateFilterEstablishment = A(UPDATE + FILTER + ESTABLISHMENT)

export const loadInfoEstablishment = A(LOAD + INFO)

export const loadCoordinate = A(LOAD + COORDINATE)

export const receiveQuery = (type, payload) => ({
    type: type,
    payload
})


