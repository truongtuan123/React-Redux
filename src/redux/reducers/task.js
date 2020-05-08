import * as type from '../constant/index';
import * as utils from '../../common/utils'


var data = JSON.parse(localStorage.getItem('tasks'));
const initialState = data ? data : [];


var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_ALL:
            return state
        case type.UPSERT_TODO:
            var task = {
                id: action.task.id,
                name: action.task.name,
                status: action.task.status === 'true' ? true : false
            }
            if (task.id) {
                var index = utils.findIndex(state, task.id);
                state[index] = task;
            } else {
                task.id = utils.randomId();
                state.push(task)
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state]
        case type.UPDATE_STATUS:
            var indexOfUpdated = utils.findIndex(state, action.id);
            state[indexOfUpdated] = {
                ...state[indexOfUpdated],
                status: !state[indexOfUpdated].status
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state]
        case type.DELETE_TODO:
            var indexOfDeleted = utils.findIndex(state, action.id);
            state.splice(indexOfDeleted, 1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state]
        default:
            return state
    }
}

export default myReducers;