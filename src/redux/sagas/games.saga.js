import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_GAMES" actions from AdminPage
function* getGames() {
    try {

        const response = yield axios.get('/api/admin');

        yield put({ type: 'SET_GAMES', payload: response.data });
    }
    catch (error) {
        console.log('User get request failed', error);
    }
}
function* getWords() {
    try {//displays words from database
        const response = yield axios.get('/api/admin/currentGame');
        yield put({ type: 'SET_ADMINWORDS', payload: response.data });
    }
    catch (error) {
        console.log('GamesSaga get request in getWords failed', error);
    }
}

function* gamesSaga() {
    yield takeLatest('ADD_GAMES', getGames);
    yield takeLatest('ADD_GAMES', getWords);
}

export default gamesSaga;
