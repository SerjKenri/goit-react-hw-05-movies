import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
    padding-top: 25px;
    padding-bottom: 25px;
`;

export const List = styled.ul`
    margin-top: 20px;
    max-width: 400px;
`;

export const ListLink = styled(Link)`
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    &:focus {
        color: red;
        font-weight: 500;
    }
    &:hover {
        color: red;
        font-weight: 500;
    }
`;
