import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

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
`;

export const BooksInfo = styled.section`
    margin-top: 50px;
    max-width: 700px;

    header {
        display: flex;
        align-items: center;

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }

        div {
            margin-left: 24px;
            strong {
                font-size: 36px;
            }
            p {
                font-size: 18px;
                margin-top: 4px;
            }
        }
    }

    Div {
        max-width: 700px;

        a {
            float: right;
            background: orange;
            cursor: pointer;
            color: #000000;
            font: 20px Roboto;
            padding: 5px 5px;
            font-weight: 500;
            transition: 1s;
            border-radius: 8px;
            & + a {
                background: orange;
                margin-right: 15px;
            }
            &:hover {
                scale: 0.95;
            }
        }
    }
    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;
        margin-left: 30px;

        li {
            & + li {
                margin-left: 40px;
            }
            strong {
                display: block;
                font-size: 36px;
                color: #000000;
            }
            span {
                display: block;
                margin-top: 4px;
            }
        }
    }
`;
export const Relacionados = styled.div`
    margin-top: 40px;
    max-width: 700px;
    max-height: 500px;

    h1 {
        padding: 15px 5px;
        font: 50px Roboto 200;
    }

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
