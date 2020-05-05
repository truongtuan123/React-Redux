import * as type from '../constant/index';

export const getAll = () => {
    return {
        type: type.GET_ALL
    }
}

export const addTodo = (task) => {
    return {
        type: type.ADD_TODO,
        task
    }
}