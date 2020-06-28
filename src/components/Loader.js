import React from "react";
import styled, { keyframes } from "styled-components";

const blink = keyframes`
    0% {
        opacity: .2;
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: .2;
    }
`;

export const Animation = styled.div`
    text-align: center; 
    
    span {
        color: #7A00FF;
        display: inline-block;
        margin: 0 4px;
        font-size: 15rem;
        line-height: 0.1;
        animation-name: ${blink};
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-fill-mode: both;
    }

    span:nth-child(2) {
        animation-delay: .2s;
    }

    span:nth-child(2) {
        animation-delay: .4s;
    }
`;

const Loader = () => {
    return (
        <Animation>
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </Animation>
    );
};

export default Loader;