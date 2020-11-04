const wordLengthReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_WORD_LENGTH'://setting the state to the game word length selected
            return action.payload;
        case 'UNSET_WORD_LENGTH':
            return [];
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.wordLength in CurrentGame.js
export default wordLengthReducer;
