import { API_POST_LOGIN_PAGE_SUCCESS } from "../actions/loginAction"
import { storeUserInfo } from "../actions/userAction"
import { API_GET_ABOUT_PAGE_SUCCESS } from "../actions/aboutAction"

export const handleToken = ({dispatch, getState}) => next => action => {
    if (action.type === API_POST_LOGIN_PAGE_SUCCESS || action.type === API_GET_ABOUT_PAGE_SUCCESS) {
        // console.log("Handle Token: ", action)
        localStorage.setItem('accessToken', action.payload.header.token)
        dispatch(storeUserInfo())
        next(action)
    } else {
        next(action)
    }
}