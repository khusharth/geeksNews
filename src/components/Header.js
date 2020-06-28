import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { Button, Logo, Toggle } from "./";
import history from "../history";

const StyledHeader = styled.header` 
    background-color: ${p => p.theme.cardColor};
    min-height: 7rem;
    box-shadow: 0 1rem 1rem 0 rgba(0,0,0,0.1);
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

    & a {
        outline: none;
    }
`;

const Span = styled.span`
    margin-right: 2rem;

    & svg {
        margin-right: 0.5rem;

        @media only screen and (max-width: 600px) {
            margin-right: 0;
        }
    }
`;

const Text = styled.span`
    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

const Header = () => {
    const { id, setTheme } = useContext(ThemeContext);

    return (
        <StyledHeader>
            <Link to="/">
                <Logo />
            </Link>
            <div>
                <Span>
                    <Button onClick={() => history.push('/likes')}>
                        <FaHeart /> <Text>Likes</Text>
                    </Button>
                </Span>
                <Toggle isDark={id === 'dark'} onToggle={setTheme} />
            </div>
        </StyledHeader>
    );
};

export default Header;