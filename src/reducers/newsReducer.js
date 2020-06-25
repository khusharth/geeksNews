import { actionTypes } from "../actions/types";

const getInitialState = () => ({
    theme: 'dark',
});

export default (state = getInitialState(), action) => {
    switch (action.type) {
        case actionTypes.SET_THEME:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
};