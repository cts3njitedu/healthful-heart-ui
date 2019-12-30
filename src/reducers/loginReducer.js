
const initialState = {
    userProfile: {

    }
};

export default function loginFormReducer(state=initialState, action) {
    console.log(action);
    switch(action.type) {  
      default:
        // ALWAYS have a default case in a reducer
        return {
        
        }
    }
  }