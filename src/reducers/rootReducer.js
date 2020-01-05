import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import loginForm from './loginReducer'


export default combineReducers(
    {
        loginForm,
        form: formReducer
        
    }
)

