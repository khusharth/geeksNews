import { createSelector } from "reselect";

const storyIDsSelector = state => state.story.storyIds;
const storiesSelector = state => state.story.stories;

export const hasMoreStoriesSelector = createSelector(
    storyIDsSelector, // return storyIds
    storiesSelector, // returns stories
    (storyIds, stories) => storyIds.length > stories.length,
);