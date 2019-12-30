import axios from "axios"

export const LOGIN_FORM_SUBMIT_BEGIN = "LOGIN_FORM_SUBMIT_BEGIN"
export const LOGIN_FORM_SUBMIT_SUCCESS = "LOGIN_FORM_SUBMIT_SUCCESS"
export const LOGIN_FORM_SUBMIT_FAIL = "LOGIN_FORM_SUBMIT_FAIL"


export function submit(values) {
    axios.post('/api/login',values).then(res => {
        console.log(res);
        console.log(res.data);
    })
    
    
}

export const submitFormBegin = form => ({
    type: LOGIN_FORM_SUBMIT_BEGIN,

})