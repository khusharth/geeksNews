import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const ImageSpan = styled.span`
    & img {
        width: 220px;

        @media only screen and (max-width: 600px) {
            width: 190px;
        }
    }
`;

const Logo = (props) => {
    return (
        <ImageSpan>
            <img
                src={logo}
                alt='logo'
            />
        </ImageSpan>
    );
};

export default Logo;