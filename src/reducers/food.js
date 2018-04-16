import * as Types from './../constants/constants';

const initialState = [

];

var findIndex = (foods, id) => {
    var result = -1;
    foods.forEach((food, index) => {
        if (food.id === id) {
            result = index
        }
    });
    return result;
}

const food = (state = initialState, action) => {
    // console.log(action.foods);
    var index = -1;
    var { id, food } = action;
    switch (action.type) {
        case Types.FETCH_FOOD:
            state = action.food
            return [...state];

        case Types.DELETE_FOOD:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];

        case Types.ADD_FOOD:
            state.push(action.food);
            return [...state];

        case Types.UPDATE_FOOD:
            index = findIndex(state, food.id);
            state[index] = food;
            return [...state];


        default: return [...state];
    }
};

export default food;
