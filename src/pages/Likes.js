import React from "react";
import NewsList from "../components/NewsList";
import { connect } from 'react-redux';

const Likes = ({ likedStories }) => {
    return (
        <main>
            <NewsList stories={likedStories} />
        </main>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        likedStories: state.story.likedStories,
    }
};

export default connect(mapStateToProps)(Likes);