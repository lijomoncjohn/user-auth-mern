import { combineReducers } from 'redux';
import authReducer from '../entities/auth/reducer'
import userReducer from '../entities/user/reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer
});

export default rootReducer;