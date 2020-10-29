import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchWords() {
    try {
        
        const response = yield axios.get('/api/admin');
        
        yield put({ type: 'SET_WORDS', payload: response.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* wordsSaga() {
    yield takeLatest('FETCH_WORDS', fetchWords);
}

export default wordsSaga;
