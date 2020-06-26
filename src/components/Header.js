import React from "react";
import styled from "styled-components";
import { FaHeart, FaSun, FaMoon } from "react-icons/fa";
import { Button, Logo } from "./";

const StyledHeader = styled.header` 
    background-color: #fff;
    /* background-color: #424242; */
    min-height: 7rem;
    box-shadow: 0 1rem 2rem 0 rgba(0,0,0,0.1);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0.5rem 6rem;
    justify-content: space-between;

    @media only screen and (max-width: 767px) {
        padding: 0.5rem 2rem;
    }

    & button svg {
        font-size: 2rem;
    }
`;

const Span = styled.span`
    margin-right: 2rem;

    & svg {
        margin-right: 0.5rem;
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <Logo width={250} />
            <div>
                <Span> <Button><FaHeart />Likes</Button></Span>
                <Button><FaSun /></Button>
            </div>
        </StyledHeader>
    );
};

export default Header;