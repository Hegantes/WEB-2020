import {NEW_NUMBER1} from './type1';

export function changeNumber1(new_number){
    return{
        type: NEW_NUMBER1,
        payload: new_number
    }
}

