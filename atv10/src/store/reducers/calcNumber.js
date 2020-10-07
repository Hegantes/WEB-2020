import {NEW_NUMBER1} from '../actions/type1';
import {NEW_NUMBER2} from '../actions/type2';

const initialState = {
    number1: 0,
    number2: 0
}

export default function(state = initialState, action){
    switch(action.type){
        case NEW_NUMBER1:
            return{
                ...state,
                number1: action.payload
            }
        case NEW_NUMBER2:
            return{
                ...state,
                number2: action.payload
            }
        default:
            return state
    }
}