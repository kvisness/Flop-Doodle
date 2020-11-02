const currentGameReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ADMINWORDS':
            return action.payload;
        case 'UNSET_ADMINWORDS':
            return [];
        case 'SET_MISSEDWORDS':
            return action.payload
        case 'UNSET_MISSEDWORDS':
            return [];
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.currentGame
export default currentGameReducer;
