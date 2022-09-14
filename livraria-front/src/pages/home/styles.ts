import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Nav = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    max-width: 900px;
`;
export const Logo = styled.h1`
    font: 65px Dancing Script;
    max-width: 560px;
    color: #000000;
`;
export const Menu = styled.div`
    max-width: 600px;
    margin-top: 30px;
    display: inline-flex;
    margin-top: 50px;

    a {
        text-decoration: none;
        font: 25px Sans-Serif;
        align-items: center;
        transition: 1s;
        color: #000000;
        background: orange;
        padding: 3px 5px;
        border-radius: 8px;
        font-weight: 550;

        & + a {
            display: flex;
            margin-left: 15px;
            width: 270px;
        }
        &:hover {
            scale: 0.97;
        }
    }
`;

export const Form = styled.form<FormProps>`
    margin: 20px auto;
    max-width: 500px;
    display: flex;
    animation: flipTitle 2s;
    float: right;

    @keyframes flipTitle {
        from {
            transform: rotateY(90deg);
        }
        to {
            transform: rotateY(0deg);
        }
    }

    input {
        flex: 1;
        height: 40px;
        border: 0;
        padding: 0 24px;
        border-radius: 5px 0 0 5px;
        color: #000000;
        border: 2px solid #fff;
        border-right: 0;
        margin-left: 80px;
        box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.8);

        ${(props) =>
            props.hasError &&
            css`
                border-color: #c53030;
            `}

        &::placeholder {
            color: #a8a8b3;
        }
    }
    button {
        width: 150px;
        height: 40px;
        background: orange;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: #fff;
        font-weight: 600;
        transition: background-color 0.2s;
        box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.8);

        &:hover {
            background: ${shade(0.1, 'orange')};
        }
    }
`;
export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-left: 330px;
    margin-top: -10px;
`;

export const Books = styled.div`
    margin-top: 40px;
    max-width: 700px;
    max-height: 500px;

    a {
        background: #fff;
        border-radius: 15px;
        padding: 20px;
        text-decoration: none;
        color: black;

        display: flex;
        align-items: center;
        transition: 1s;
        box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.8);

        &:hover {
            transform: translateX(20px);
        }

        & + a {
            margin-top: 15px;
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div {
            margin-left: 18px;
            strong {
                font-size: 23px;
                color: black;
            }
            p {
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
            }
        }
        svg {
            margin-left: auto;
            color: orange;
        }
    }
`;
