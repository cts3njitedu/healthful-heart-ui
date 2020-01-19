import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import loginForm from './loginReducer'
import user from './userReducer'


export default combineReducers(
    {
        loginForm,
        form: formReducer,
        user
        
    }
)

