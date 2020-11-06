import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


// worker Saga: will be fired on "FETCH_CURRENT_GAME_WORDS" actions from CurrentGame page

function* getWords(action) {
    try {//displays words from database
        console.log('in currentGame saga getwords')
        const response = yield axios.get(`/api/currentGame/${action.payload}`);
        console.log('response from currentgame saga getwords', response.data)
        yield put({ type: 'SET_CURRENT_WORDS', payload: response.data });
    }
    catch (error) {
        console.log('currentGameSaga get request in getWords failed', error);
    }
}
function* highScore (action){
    try {
        console.log ('in currentGame saga highScore')
        yield axios.put('/api/highScore/', action.payload);
        
        yield put({ type: 'FETCH_USER'});//setting the db highscore for each user
    }
    catch (error) {
        console.log('currentGameSaga PUT request in highScore failed', error);
    }
}

function* currentGameSaga() {
    yield takeLatest('FETCH_CURRENT_WORDS', getWords);
    yield takeLatest('SET_HIGH_SCORE', highScore);
}

export default currentGameSaga;
