// reducers/people.js
import * as Types from './../constants/constants';

const initialState = { use: [] }

export default function useReducer(state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_USE:
            stateNew = action.use;

            var email= state.use.map((index,use)=>{
              return use.email;
            });
            var pass= state.use.map((index,use)=>{
              return use.pass;
            });
            var emailNew = stateNew.map((index,use)=>{
              return use.email;
            });
            var passNew = stateNew.map((index,use)=>{
              return use.pass;
            });
            if(email===emailNew && pass===passNew){
              return {
                  use: [...state.use, emailNew, passNew]
              };
            }
            return [...state];
    case Types.ADD_USE:
      return {
        use: [...state.use, action.use],
      };
   
    default:
      return state;
  }
}