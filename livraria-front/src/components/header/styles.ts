import styled from 'styled-components';

export const Head = styled.header`
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
