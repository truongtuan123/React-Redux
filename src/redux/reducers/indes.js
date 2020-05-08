import { combineReducers } from 'redux';
import task from './task';
import form from './form';
import updateTask from './updateTask';
import filterTable from './filter';


export default combineReducers ({
    task,
    form,
    updateTask,
    filterTable
});