import UserActionTypes from './user.actions';

export const INITIAL_STATE = {
    currentUser: null,
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return  {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default reducer;