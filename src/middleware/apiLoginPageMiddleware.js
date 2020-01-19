import { API_GET_LOGIN_PAGE, API_POST_LOGIN_PAGE } from "../actions/loginAction";
import Axios from "axios";

const apiMiddleware = ({dispatch}) => next => action => {

    if (action.type === API_GET_LOGIN_PAGE || action.type === API_POST_LOGIN_PAGE) {
        const {
            url,
            method,
            data,
            onStart,
            onSuccess,
            onFailure,
            headers
        } = action.payload;
    
        const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";
    
        Axios.defaults.headers.common["Content-Type"] = "application/json";
        Axios.defaults.withCredentials = true
        // Axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        next(onStart());
    
        Axios.request({
            url,
            method,
            headers,
            [dataOrParams]: data,
            headers: {
                crossDomain: true
            }
        }).then(res => {
            console.log("Succesfully completed")
            next(onSuccess(res.data, res.headers));
        }).catch(error => {
            let response = error.response

            dispatch(onFailure(response.status, response.data.page))
        });
    } else {
        next(action);
    }
    

}
export default apiMiddleware

