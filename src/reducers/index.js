import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import storyReducer from "./storyReducer";

export const saveToLocalStorage = (state) => {
    // console.log('saving...');
    // state.story.stories = defaultArray;
    try {
        const serialzedState = JSON.stringify(state);
        localStorage.setItem('state', serialzedState);
    } catch (error) {
        console.log(error);
    }
}

export const loadFromLocalStorage = () => {
    // console.log('loading...');
    try {
        const serialzedState = localStorage.getItem('state');
        if (serialzedState === null) return undefined;
        return JSON.parse(serialzedState);
    } catch (error) {
        console.log(error);
        return undefined;
    }
};

export default combineReducers({
    theme: themeReducer,
    story: storyReducer
});