import { LOGIN_PAGE_BEGIN, LOGIN_PAGE_SUCCESS, LOGIN_PAGE_FAILURE, LOGIN_FORM_CHANGE } from "../actions/loginAction";

const initialState = {
  page: {
    sections: [],
    validations: [],
    fields: []
  },
  loading: false,
  error: null
};

export default function loginFormReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case LOGIN_PAGE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case LOGIN_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        page: action.payload.page
      }
    case LOGIN_PAGE_FAILURE:
      return {
        ...state,
        loading: false,
        page: {},
        error: action.payload.error
      }
    case LOGIN_FORM_CHANGE:
      return {
        ...state,
        page: {
          ...state.page,
          fields: state.page.fields.map((field, index) => {
            if (field.id !== action.payload.field.id) {
                return field;
            }
            return {
              ...field,
              value: action.payload.field.value
            }
          })
        }
      }
    default:
      // ALWAYS have a default case in a reducer
      return {
        page: {},
        loading: false,
        error: null
      }
  }
}