import { API_POST_LOGIN_PAGE_SUCCESS } from "../actions/loginAction"
import { storeUserInfo } from "../actions/userAction"

export const handleToken = ({dispatch, getState}) => next => action => {
    if (action.type === API_POST_LOGIN_PAGE_SUCCESS) {
        localStorage.setItem('accessToken', action.payload.header.token)
        dispatch(storeUserInfo())
        next(action)
    } else {
        next(action)
    }
}