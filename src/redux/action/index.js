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

export const toggleForm = () => {
    return {
        type: type.TOGGLE_FORM
    }
}

export const closeForm = () => {
    return {
        type: type.CLOSE_FORM
    }
}

export const openForm = () => {
    return {
        type: type.OPEN_FORM
    }
}

export const updateStatus = (id) => {
    return {
        type: type.UPDATE_STATUS,
        id
    }
}

export const deleteTodo = (id) => {
    return {
        type: type.DELETE_TODO,
        id
    }
}