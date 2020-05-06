import { combineReducers } from 'redux';
import task from './task'
import form from './form'

export default combineReducers ({
    task,
    form
});