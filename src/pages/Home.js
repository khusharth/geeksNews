import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from 'react-redux';
import { fetchStoryIDs, fetchStories } from "../actions";
import NewsList from "../components/NewsList";
import Loader from "../components/Loader";
import { hasMoreStoriesSelector } from '../reducers/selector';


const Home = ({ fetchStoryIDs, fetchStories, storyIds, page, isFetching, stories, hasMoreStories, isLiked }) => {

    const fetchStory = () => {
        console.log('called')
        if (!isFetching) {
            console.log(storyIds);
            fetchStories({ storyIds, page });
        }
    }

    useEffect(() => {
        if (stories.length === 0) {
            fetchStoryIDs();
        }
    }, []);

    console.log(stories.length)

    return (
        <main>
            <InfiniteScroll
                dataLength={stories.length}
                next={fetchStory}
                hasMore={hasMoreStories}
                loader={<Loader />}
                style={{
                    height: '100%',
                    overflow: 'visible'
                }}
            >
                <NewsList stories={stories} />
            </InfiniteScroll>
        </main>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        stories: state.story.stories,
        page: state.story.page,
        storyIds: state.story.storyIds,
        isFetching: state.story.isFetching,
        hasMoreStories: hasMoreStoriesSelector(state),
    }
};



export default connect(mapStateToProps, { fetchStoryIDs, fetchStories })(Home);