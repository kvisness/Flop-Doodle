import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions from AdminPage
function* getWords() {
    try {//displays words from database
        const response = yield axios.get('/api/admin');
        yield put({ type: 'SET_ADMINWORDS', payload: response.data });
        } 
    catch (error) {
        console.log('AdminSaga get request in getWords failed', error);
        }
}

function* addWords(action){
    try {
        console.log('in adminsaga', action.payload)
        yield axios.post('/api/admin/words/', action.payload);//adds words to the list
        yield put({ type: 'FETCH_ADMINWORDS' });//refreshes the list after word is added
        }
    catch (error) {
        console.log('AdminSaga post request in addWords failed', error);
        }
}

function* removeWords(action){
    try {//removes words from the database
        yield axios.delete(`/api/admin/${action.payload}`);
        //refreshes the page
        yield put({ type: 'FETCH_ADMINWORDS'});
    }
    catch (error) {
        console.log('AdminSaga get request in removeWords failed', error);
    }
}

function* adminSaga() {
    yield takeLatest('FETCH_ADMINWORDS', getWords);
    yield takeLatest('ADD_WORD', addWords);
    yield takeLatest('REMOVE_WORD', removeWords);
  
}

export default adminSaga;
