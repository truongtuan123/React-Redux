import * as type from '../constant/index';

const initialState = [];

var s4 = () => {
    return  Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var randomId = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

var myReducers = (state = initialState, action) => {
    switch( action.type ) {
        case type.GET_ALL:
            return state
        case type.ADD_TODO:
            return [
                ...state,
                {
                    id: randomId(),
                    name: action.task.name,
                    status: action.task.status === 'true' ? true : false
                }
            ]
        default: 
            return state
    }
}

export default myReducers;