import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_WORDS" actions from AdminPage
function* getWords() {
    try {

        const response = yield axios.get('/api/currentGame');

        yield put({ type: 'SET_WORDS', payload: response.data });
        //refresh list of words
        yield put({ type: 'FETCH_WORDS'});
    }
    catch (error) {
        console.log('User get request failed in currentGameSaga', error);
    }
}

function* currentGameSaga() {
    yield takeLatest('ADD_WORDS', getWords);
}

export default currentGameSaga;
