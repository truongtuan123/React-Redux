import * as type from '../constant/index';

const initialState = {
    id: '',
    name: '',
    status: false
};

var myReducers = (state = initialState, action) => {
    switch( action.type ) {
        case type.UPDATE_TASK:
            return action.task
        default: 
            return state
    }
}

export default myReducers;