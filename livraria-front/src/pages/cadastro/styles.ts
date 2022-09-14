import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 10px;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        font: 15px Sans-Serif;
        color: #000000;
        transition: 1s;
        padding-top: 15px;

        svg {
            margin-right: 4px;
            color: #000000;
        }

        &:hover {
            scale: 0.97;
            color: #f0c320;
        }
    }
`;

export const Logo = styled.h1`
    font: 65px Dancing Script;
    max-width: 560px;
    color: #000000;
`;
export const Titulo = styled.h1`
    font: 40px Roboto;
    font-weight: 500;
    max-width: 900px;
    padding-top: 20px;
    text-align: center;
    color: #000000;
`;
export const Nav = styled.div`
    align-items: center;
    display: block;
    justify-content: space-between;
    max-width: 900px;
`;
export const Form = styled.form<FormProps>`
    margin: 40px auto;
    max-width: 600px;
    span {
        font-weight: 500;
        font-size: 20px;
    }

    input {
        flex: 1;
        margin-bottom: 5px;
        margin-top: 2px;
        height: 40px;
        width: 100%;
        border: 0;
        padding: 0 24px;
        border-radius: 5px 0 0 5px;
        color: #000000;
        border: 2px solid #fff;
        border-right: 0;
        box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.8);
        & + input {
            margin-top: 50px;
        }
    }
    div {
        text-align: center;
    }
    button {
        width: 400px;
        align-items: center;
        margin-top: 30px;
        height: 40px;
        background: orange;
        border-radius: 12px;
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
    color: red;
    font-size: 20px;
    margin-left: 330px;
    margin-top: -10px;
`;
