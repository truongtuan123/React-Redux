import * as type from '../constant/index';

const initialState = [];

var myReducers = (state = initialState, action) => {
    switch( action ) {
        case type.GET_ALL:
            return state
        default: 
            return state
    }
}

export default myReducers;