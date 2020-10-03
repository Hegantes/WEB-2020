import firebase from 'firebase/app';
import 'firebase/firestore';
import Firebase_Key from '../keys/Firebase_key';

export default class Firebase{
    constructor(){
        firebase.initializeApp(Firebase_Key);
    }

    getFirestore(){
        return firebase.firestore();
    }
}