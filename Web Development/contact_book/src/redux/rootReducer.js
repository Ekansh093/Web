import { combineReducers } from 'redux';
import { contactReducer } from './reducer/contactReducer';

const rootReducer = combineReducers({
    contactRDCR: contactReducer
});

export default rootReducer;