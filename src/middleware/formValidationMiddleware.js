import { LOGIN_FORM_VALIDATION, handleFormValidationFinish } from "../actions/loginAction"
import {validate} from "../utilities/fieldValidations"

const validateForm = ({getState}) => next => action => {
    if (action.type === LOGIN_FORM_VALIDATION) {
        console.log("Have a nice day");
        let {loginForm} = getState();
        let field = action.payload.field;
        let currentField = loginForm.page.fields.filter(f => f.id === field.id);
        let sectionFields = loginForm.page.fields.filter(f => (f.parentId === currentField[0].parentId) && !f.isDisabled)
        let errors = {};
        let promises = [];
        console.log(sectionFields);
        sectionFields.forEach(sectionField => {
            promises.push(new Promise(function(resolve){
                let validations = loginForm.page.validations.filter(v => v.parentId === sectionField.id);
                let valid = validate(sectionField, validations);
                valid.then(function(validationErrors){
                    errors = {...errors, [sectionField.id]: validationErrors }
                    resolve();
                })
                
            }))
        })

        Promise.all(promises).then(function(){
            next(handleFormValidationFinish(errors))
        })

    } else {
        next(action);
    }

}

export default validateForm;