import { actionTypes } from "./types";

export const setTheme = (payload = {}) => {
    return {
        type: actionTypes.SET_THEME,
        payload
    };
}