import { combineReducers } from 'redux';
import task from './task';
import form from './form';
import updateTask from './updateTask';


export default combineReducers ({
    task,
    form,
    updateTask
});