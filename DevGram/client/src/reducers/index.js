import { combineReducers } from "redux";
import alert from './alert'
import register from './auth'
import profileReducer from './profile'

export default combineReducers({
    alert,
    register,
    profileReducer
})