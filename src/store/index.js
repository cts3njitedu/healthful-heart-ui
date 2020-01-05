import { createStore, applyMiddleware } from 'redux'
import apiLoginPageMiddleware from '../middleware/apiLoginPageMiddleware';
import rootReducer from '../reducers/rootReducer'
import restructurePageMiddleware from '../middleware/restructurePageMiddleware';
import validateForm from '../middleware/formValidationMiddleware';

const store = createStore(rootReducer, 
    applyMiddleware(
        validateForm,
    apiLoginPageMiddleware, 
    restructurePageMiddleware
    ));

export default store;