import {createStore, combineReducers} from 'redux';
import calcNumberReducer from './reducers/calcNumber';

const reducers = combineReducers({
    calcNumber: calcNumberReducer
})

function storeConfig(){
    return createStore(reducers);
}

export default storeConfig;