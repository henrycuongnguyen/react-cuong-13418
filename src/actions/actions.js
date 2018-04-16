import * as Types from './../constants/constants';
import callApi from './../network/apiData';
import callApiFood from './../network/apiDataFood';

export const actFetchUse = () => {
    return dispatch => {
        return callApi('uses', 'GET', null).then(res => {
            dispatch(FetchUse(res.data));
        });
    };
}

export const FetchUse = (use) => {
    return {
        type: Types.FETCH_USE,
        use
    }
}

export const actAddUse = (use) => {
    return dispatch => {
        return callApi('uses', 'POST', use).then(res => {
            dispatch(addUse(res.data));
        });
    }
}

export const addUse = (use) => {
    return {
        type: Types.ADD_USE,
        use,
    }
}
// ==============food

export const actFetchFood = () => {
    return dispatch => {
        return callApiFood('FlatListData', 'GET', null).then(res => {
            dispatch(FetchFood(res.data));
        });
    };
}

export const FetchFood = (food) => {
    return {
        type: Types.FETCH_FOOD,
        food
    }
}

export const actaddFood = (food) => {
    return dispatch => {
        return callApiFood('FlatListData', 'POST', food).then(res => {
            dispatch(addFood(res.data));
        });
    }
}

export const addFood = (food) => {
    return {
        type: Types.ADD_FOOD,
        food,
    }
}

export const actUpdatefoodRequest = (food) => {
    return dispatch => {
        return callApiFood(`FlatListData/${food.id}`, 'PUT', food).then(res => {
            dispatch(actUpdatefood(res.data));
        });
    }
}

export const actUpdateFood = (food) => {
    return {
        type: Types.UPDATE_FOOD,
        food
    }
}

export const actDeleteFoodRequest = (id) => {
    return dispatch => {
        return callApiFood(`FlatListData/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteFood(id));
        })
    }
}

export const actDeleteFood = (id) => {
    return {
        type: Types.DELETE_FOOD,
        id
    }
}

export const actGetFoodRequest = (id) => {
    return dispatch => {
        return callApiFood(`FlatListData/${id}`, 'GET', null).then(res => {
            dispatch(actGetFood(res.data));
        });
    }
}

export const actGetFood = (food) => {
    return {
        type: Types.EDIT_FOOD,
        food
    }
}