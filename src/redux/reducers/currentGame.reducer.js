const currentGameReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CURRENT_WORDS':
            return action.payload;
        case 'UNSET_CURRENT_WORDS':
            return [];
        case 'SET_MISSED_WORDS':
            return action.payload
        case 'UNSET_MISSED_WORDS':
            return [];
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.currentGame
export default currentGameReducer;
