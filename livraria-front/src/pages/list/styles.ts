import styled from 'styled-components';

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

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-left: 330px;
    margin-top: -10px;
`;

export const Titulo = styled.h1`
    h1 {
        font: 40px Noto Serif Georgian;
        font-weight: 600;
        padding-top: 30px;
    }
`;

export const ListBooks = styled.div`
    margin-top: 30px;
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
