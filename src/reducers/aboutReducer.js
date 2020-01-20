import { API_GET_ABOUT_PAGE_SUCCESS, API_GET_ABOUT_PAGE_FAILURE, API_GET_ABOUT_PAGE_START } from "../actions/aboutAction";

const initialState = {

    loading: false
  };

export default function aboutReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case API_GET_ABOUT_PAGE_FAILURE:
            return {
                ...state,
                loading: true
            }
        case API_GET_ABOUT_PAGE_SUCCESS: 
            return {
                ...state,
                loading: false
            }
        case API_GET_ABOUT_PAGE_START: 
            return {
                ...state, 
                loading: false
            }
      default:
        // ALWAYS have a default case in a reducer
        return {
     
              loading: false
      
        }
    }
  }