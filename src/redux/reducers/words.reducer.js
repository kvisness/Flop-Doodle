const wordsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_WORDS':
            return action.payload;
        case 'UNSET_WORDS':
            return {};
        default:
            return state;
    }
};

// words will be on the redux state at:
// state.words
export default wordsReducer;
