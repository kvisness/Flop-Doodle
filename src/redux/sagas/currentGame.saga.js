import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_CURRENT_GAME_WORDS" actions from CurrentGame page

function* getWords() {
    try {//displays words from database
        const response = yield axios.get('/api/admin');
        yield put({ type: 'SET_ADMINWORDS', payload: response.data });
    }
    catch (error) {
        console.log('currentGameSaga get request in getWords failed', error);
    }
}

function* missedWords (){
    try{
        const response = yield axios.get('/api/finalResults');
        yield put({ type: 'SET_MISSED_WORDS', payload: response.data });
}
    catch (error) {
        console.log('currentGameSaga get request in missedWords failed', error);
    }
}
function* currentGameSaga() {
    yield takeLatest('FETCH_CURRENT_GAME_WORDS', getWords);
    yield takeLatest('FETCH_MISSED_WORDS', missedWords);
}

export default currentGameSaga;
