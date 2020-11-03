const missedWordsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MISSED_WORDS':
            return [...state, action.payload];
        case 'UNSET_MISSED_WORDS':
            return [];
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.missedWords
export default missedWordsReducer;
