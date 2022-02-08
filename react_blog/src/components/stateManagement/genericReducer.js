import { TEXT_ACTION } from './actions' 

export const textState = {
    textValue:2
}

export const textReducer = (state, action) => {
    switch (action.type) {
        case TEXT_ACTION:

            return{
                ...state,
                textValue: action.payload,
            }
    } 
    
    return state;
};