import React from 'react';
import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsContainer = styled.ul`
    margin: 5rem auto;
    width: 80%;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 500px) {
        width: 90%;
    }
`

const NewsList = ({ stories }) => {
    return (
        <NewsContainer>
            {stories.map(story => <NewsItem story={story} key={story.id} />)}
        </NewsContainer>
    );
};

export default NewsList;