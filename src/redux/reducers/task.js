import * as type from '../constant/index';
import * as utils from '../../common/utils'


var data = JSON.parse(localStorage.getItem('tasks'));
const initialState = data ? data : [];


var myReducers = (state = initialState, action) => {
    switch( action.type ) {
        case type.GET_ALL:
            return state
        case type.ADD_TODO:
            var newTask = {
                id: utils.randomId(),
                name: action.task.name,
                status: action.task.status === 'true' ? true : false
            };
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state]
        case type.UPDATE_STATUS:
            var index = utils.findIndex(state, action.id);
            state[index] = {
                ...state[index],
                status: !state[index].status
            }
            console.log(state);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state]
        default: 
            return state
    }
}

export default myReducers;