const currentGameReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CURRENTGAME':
            return action.payload;
        case 'UNSET_CURRENTGAME':
            return {};
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.currentGame
export default currentGameReducer;
