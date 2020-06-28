import { actionTypes } from "./types";
import hackerNews from "../api/hackerNews";

const JSON_QUERY = ".json?print=pretty";
const PAGE_LIMIT = 20;

const getPageSlice = (limit, page = 0) => ({ begin: page * limit, end: (page + 1) * limit });
const getPageValues = ({ begin, end, items }) => items.slice(begin, end);

const getTopStoriesByPage = async (id, page) => {
    const { begin, end } = getPageSlice(PAGE_LIMIT, page);
    const activeIDs = getPageValues({ begin, end, items: id });
    const storyPromises = await Promise.all(activeIDs.map(async (id) => {
        const response = await hackerNews.get(`/item/${id}${JSON_QUERY}`);
        return response.data;
    }));
    return storyPromises;
    // Wait for all stories to return at same time
}


export const setTheme = (payload = {}) => {
    return {
        type: actionTypes.SET_THEME,
        payload
    };
}

export const setLike = (payload = {}) => {
    const { liked, story, stories, likedStories } = payload;
    const { id } = story;
    const index = stories.findIndex(item => item.id === id);

    stories[index].isLiked = liked;

    let newLikedStories = [];
    if (liked) {
        newLikedStories = [...likedStories, story];
        console.log(newLikedStories);
    } else {
        newLikedStories = likedStories.filter(item => item.id !== id);
        console.log(newLikedStories);
    }


    return {
        type: actionTypes.SET_LIKE,
        payload: { stories, newLikedStories }
    };
}

export const fetchStoryIDs = (payload = {}) => async dispatch => {
    try {

        dispatch({ type: actionTypes.FETCH_STORY_IDS_REQUEST, payload: payload });

        const response = await hackerNews.get(`/topstories${JSON_QUERY}`);
        const storyIds = response.data;
        dispatch({ type: actionTypes.FETCH_STORY_IDS_SUCCESS, payload: storyIds });
        dispatch(fetchStories({ storyIds, page: 0 }));
        return storyIds;

    } catch (error) {
        dispatch({ type: actionTypes.FETCH_STORY_IDS_FAILURE, payload: error })
    }
}

export const fetchStories = (payload = {}) => async dispatch => {
    try {
        dispatch({ type: actionTypes.FETCH_STORIES_REQUEST, payload: payload });
        const { storyIds, page } = payload;

        // const { begin, end } = getPageSlice(PAGE_LIMIT, page);
        // const activeIDs = getPageValues({ begin, end, items: storyIDs });

        // const storyPromises = activeIDs.map(async (id) => {
        //     const response = await hackerNews.get(`/item/${id}${JSON_QUERY}`);
        //     return response.data;
        // });
        // Wait for all stories to return at same time
        return getTopStoriesByPage(storyIds, page)
            .then(stories => {
                stories.forEach((story) => {
                    story.isLiked = false;
                });
                dispatch({ type: actionTypes.FETCH_STORIES_SUCCESS, payload: stories })
            })


    } catch (error) {
        dispatch({ type: actionTypes.FETCH_STORIES_FAILURE, payload: error });
    }
}
