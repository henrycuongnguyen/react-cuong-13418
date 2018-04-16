import * as Types from './../constants/ActionTypes';

var initialState = {};

const itemEditing = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_FOOD:
            return action.food;
        default:
            return state;
    }
}

export default itemEditing;
