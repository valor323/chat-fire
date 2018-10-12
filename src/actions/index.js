import types from './types';
import {db} from '../firebase';


export const getMessages = () => dispatch => {
    db.ref('/').on('value', (snapshot) => {
        console.log('db snapshot', snapshot.val())
    })
}