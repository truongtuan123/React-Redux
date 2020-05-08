import * as type from '../constant/index';

const initialState = '';

var myReducers = (state = initialState, action) => {
    switch( action.type ) {
        case type.SEARCH:
            console.log(action)
            return action.keyword
        default: 
            return state
    }
}

export default myReducers;