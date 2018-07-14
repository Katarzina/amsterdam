import { combineReducers } from 'redux'
import establishment from './establishment'
import events from './events'
import details from './details'

const rootReducer = combineReducers({
	establishment,
	details,
	events
});

export default rootReducer;
