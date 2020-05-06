import * as type from '../constant/index';

const initialState = false;

var myReducers = (state = initialState, action) => {
    switch( action.type ) {
        case type.TOGGLE_FORM:
            state = !state
            return state
        case type.CLOSE_FORM:
            state = false;
            return state
        case type.OPEN_FORM:
            state = true;
            return state
        default: 
            return state
    }
}

export default myReducers;