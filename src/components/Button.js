import styled from "styled-components";

const Button = styled.button`
    font-family: 'Roboto', sans-serif;
    color: rgb(255,255,255);
    border: none;
    font-weight: 500;
    /* background-image: linear-gradient(to right, #7A00FF, #9533FF); */
    background-image: linear-gradient(to right, #8c22ff, #b877ff);
    padding: 1.2rem 1.5rem;
    border-radius: 50px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    align-items: center;
    transition: all 0.2s;

    &:hover {
        transform: scale(1.06);
        box-shadow: 0 1rem 2rem 0 rgba(0,0,0, .2);
    }

    &:focus {
        outline: 0;
        box-shadow: 0 1rem 2rem 0 rgba(0,0,0, .2);
    }

    &:active {
        transform: scale(1);
    }

    & svg {
        vertical-align: middle;
    }
`;

export default Button;
