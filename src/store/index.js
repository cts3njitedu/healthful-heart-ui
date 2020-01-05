import { createStore, applyMiddleware } from 'redux'
import apiLoginPageMiddleware from '../middleware/apiLoginPageMiddleware';
import rootReducer from '../reducers/rootReducer'
import restructurePageMiddleware from '../middleware/restructurePageMiddleware';

const store = createStore(rootReducer, applyMiddleware(apiLoginPageMiddleware, restructurePageMiddleware));

export default store;