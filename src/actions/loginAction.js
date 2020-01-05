
export const LOGIN_FORM_SUBMIT_BEGIN = "LOGIN_FORM_SUBMIT_BEGIN"
export const LOGIN_FORM_SUBMIT_SUCCESS = "LOGIN_FORM_SUBMIT_SUCCESS"
export const LOGIN_FORM_SUBMIT_FAIL = "LOGIN_FORM_SUBMIT_FAIL"
export const LOGIN_PAGE_BEGIN = "LOGIN_PAGE_BEGIN"
export const LOGIN_PAGE_SUCCESS = "LOGIN_PAGE_SUCCESS"
export const LOGIN_PAGE_FAILURE = "LOGIN_PAGE_FAILURE"
export const RESTRUCTURE_PAGE = "RESTRUCTURE_PAGE"
export const LOGIN_FORM_CHANGE = "LOGIN_FORM_CHANGE"
export const LOGIN_FORM_VALIDATION = "LOGIN_FORM_VALIDATION"
export const LOGIN_FORM_VALIDATION_FINISH = "LOGIN_FORM_VALIDATION_FINISH"


export function submit() {
    console.log("has submitted")
}
export function getLoginPage() {
    return getLoginPageBegin()
}

export function handleChange() {


}
export const submitFormBegin = () => ({
    type: LOGIN_FORM_SUBMIT_BEGIN,

})

export const getLoginPageBegin = () => ({
    type: LOGIN_PAGE_BEGIN
});

export const getLoginPageSuccess = page => ({
    type: LOGIN_PAGE_SUCCESS,
    payload: { page }
});

export const getLoginPageFailure = error => ({
    type: LOGIN_PAGE_FAILURE,
    payload: { error }
});


export const handleFormChange = field => ({
    type: LOGIN_FORM_CHANGE,
    payload: { field }
});

export const handleRestructurePage = page => ({
    type: RESTRUCTURE_PAGE,
    payload: { page }
});

export const handleFormBlur = field => ({
    type: LOGIN_FORM_VALIDATION,
    payload: {field}
})


export const handleFormValidationFinish = errorFields => ({
    type: LOGIN_FORM_VALIDATION_FINISH,
    payload: { errorFields }
});