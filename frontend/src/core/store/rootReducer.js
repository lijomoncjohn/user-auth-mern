import { combineReducers } from 'redux';
import authReducer from '../entities/auth/reducer'

const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer;