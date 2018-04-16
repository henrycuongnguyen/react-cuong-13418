// reducers/index.js

import { combineReducers } from 'redux';
import use from './use';
import food from './food';

const rootReducer = combineReducers({
    use,
    food,
})

export default rootReducer