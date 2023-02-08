import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
    font-size: 2rem;
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    color: black;
    &.active {
        color: tomato;
    }
`;

export const NavEl = styled.nav`
    display: flex;
`;

export const HeaderEl = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 0px;
    margin-bottom: 16px;
    border-bottom: 3px outset grey;
`;
