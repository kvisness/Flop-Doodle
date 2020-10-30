const adminReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ADMINWORDS':
            return action.payload;
        case 'UNSET_ADMINWORDS':
            return [];
        default:
            return state;
    }
};

// admin will be on the redux state at:
// state.admin
export default adminReducer;
