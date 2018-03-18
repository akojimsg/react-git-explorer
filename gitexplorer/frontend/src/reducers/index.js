import { combineReducers } from 'redux'
import tableReducer from './tableReducer'
import inputReducer from './inputReducer'
import viewReducer from './viewReducer'


const AppReducer = combineReducers({
    tableReducer,
    inputReducer,
    viewReducer,
});

export default AppReducer;

