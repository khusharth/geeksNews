import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const FooterLink = styled.footer`
    width: 100%;
    margin-top: 4rem;
    padding: 2rem 0;
    display: flex;
    justify-content: center;

    & a {
        text-decoration: none;
         outline: none;
    }

    & a:link,
    & a:visited {
        color: inherit;       
    }

    & a:hover,
    & a:active {
        text-decoration: underline;
    }

    & span {
        color: inherit;        
        padding-right: 0.5rem;
        & svg {
            vertical-align: middle;
            margin-bottom: 4px;
        }
    }
`;

const Footer = () => {
    return (
        <FooterLink>
            <span><FaGithub /></span> <a href="https://github.com/khusharth/geeksNews" target="_blank" rel='noopener noreferrer'>khusharth/geeksNews</a>
        </FooterLink>
    );
};

export default Footer;
