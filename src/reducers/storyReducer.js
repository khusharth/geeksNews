import { actionTypes } from "../actions/types";

const getInitialState = () => ({
    storyIds: [],
    stories: [],
    likedStories: [],
    page: 0,
    isFetching: false,
    error: '',
});

export default (state = getInitialState(), action) => {
    switch (action.type) {
        case actionTypes.FETCH_STORY_IDS_REQUEST:
        case actionTypes.FETCH_STORIES_REQUEST:
            return {
                ...state,
                isFetching: true,
            };

        case actionTypes.FETCH_STORY_IDS_SUCCESS:
            return {
                ...state,
                storyIds: action.payload,
            };

        // Add new stories to previous stories
        case actionTypes.FETCH_STORIES_SUCCESS:
            return {
                ...state,
                stories: [...state.stories, ...action.payload],
                page: state.page + 1,
                isFetching: false,
            }

        case actionTypes.SET_LIKE:
            return {
                ...state,
                stories: [...action.payload.stories],
                likedStories: action.payload.newLikedStories,
            }

        default:
            return state;

    }
};

