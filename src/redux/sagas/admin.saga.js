import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions from AdminPage
function* getWords() {
    try {
        const response = yield axios.get('/api/admin');
        yield put({ type: 'SET_ADMINWORDS', payload: response.data });
        } 
    catch (error) {
        console.log('AdminSaga get request in getWords failed', error);
        }
}

function* addWords(){
    try {
        const response = yield axios.post('/api/admin');
        yield put({ type: 'ADD_WORD', payload: response.data });
        }
    catch (error) {
        console.log('AdminSaga get request in addWords failed', error);
        }
}

function* removeWords(action){
    try {
        yield axios.delete(`/api/admin/${action.payload}`);
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
