import { getLoginPageFailure, LOGIN_PAGE_BEGIN, handleRestructurePage } from "../actions/loginAction";
import Axios from "axios";

const getLoginPageApi = (store) => next => action => {

    console.log("Inside api login middleware", action);
    if (action.type === LOGIN_PAGE_BEGIN) {
        // store.dispatch(getLoginPageBegin());
        //next(action)
        return Axios.get("/api/login")
            .then(res => {
                const page = res.data;
                next(handleRestructurePage(page));
          
            })
            .catch(error => store.dispatch(getLoginPageFailure(error)));

    } else {
        next(action)
    }
    
}
export default getLoginPageApi


// return (dispatch,getState,next) => {
//     dispatch(getLoginPageBegin());
//     return axios.get("/api/login")
//         .then(res => {
//             const page = res.data;
//             restructurePage(page).then(function(newPage) {
//                 dispatch(getLoginPageSuccess(newPage));
//                 return newPage;
//             })
//         })
//         .catch(error => dispatch(getLoginPageFailure(error)));
// };