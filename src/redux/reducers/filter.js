import * as type from '../constant/index';

const initialState = {
    name: '',
    status: -1
};

var myReducers = (state = initialState, action) => {
    switch( action.type ) {
        case type.FILTER_TABLE:
            return action.filter
        default: 
            return state
    }
}

export default myReducers;