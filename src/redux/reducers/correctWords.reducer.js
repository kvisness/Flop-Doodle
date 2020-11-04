const correctWordsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CORRECT_WORDS':
            return [...state, action.payload];
        case 'UNSET_CORRECT_WORDS':
            return [];
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.missedWords
export default correctWordsReducer;
