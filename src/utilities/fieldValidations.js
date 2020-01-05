import { MANDATORY, LENGTH, REGEX } from "../constants/validations_constants";

export function validate(field, newField) {
    let validations = field.validations;
    let newValue = newField[field.name];
    let errors = {

    };
    errors[field.name] = [];
    validations.forEach(validation => {
       if (validation.validationName === MANDATORY ) {
          if (newValue === null || newValue === undefined || newValue.trim().length === 0) {
              errors[field.name] = [...errors[field.name], validation.message]
          }
       }
       if (validation.validationName === LENGTH) {
           if(newValue === null || newValue === undefined || newValue.length < validation.minLength || newValue.length > validation.maxLength) {
               errors[field.name] = [...errors[field.name], validation.message]
           }
       }
       if (validation.validationName === REGEX) {
           let pattern = new RegExp(validation.regexValue);
           if(!pattern.test(newValue)){
                errors[field.name] = [...errors[field.name], validation.message]
           }
       }
    });

    return errors;
}