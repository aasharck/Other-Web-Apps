import { combineReducers } from "redux";
import alert from './alert'
import register from './auth'
import profileReducer from './profile'
import post from './post'

export default combineReducers({
    post,
    alert,
    register,
    profileReducer
})