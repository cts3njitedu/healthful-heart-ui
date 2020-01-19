import { STORE_USER_INFO } from "../actions/userAction";

const initialState = {

    isAccessTokenEnabled: false
  };

export default function userReducer(state = initialState, action) {
    console.log(action);
    let isPresent = localStorage.getItem("accessToken") !=null;
    console.log("In user store: ", isPresent)
    switch (action.type) {
      case STORE_USER_INFO: 
       return {
           ...state,
    
            isAccessTokenEnabled: isPresent
            

       }
      default:
        // ALWAYS have a default case in a reducer
        return {
     
              isAccessTokenEnabled: isPresent
      
        }
    }
  }