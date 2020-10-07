import {NEW_NUMBER2} from './type2';

export function changeNumber2(new_number){
    return{
        type: NEW_NUMBER2,
        payload: new_number
    }
}
