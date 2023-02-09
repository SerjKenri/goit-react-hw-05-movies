import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: 2px solid #e74c3c;
    border-radius: 0.6em;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    margin: 20px;
    padding: 1.2em 2.8em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    border-color: #3498db;
    color: white;
    box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
    -webkit-transition: all 150ms ease-in-out;
    transition: all 150ms ease-in-out;
    &:focus {
        box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
        color: #3498db;
    }
    &:hover {
        box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
        color: #3498db;
    }
    max-width: 150px;
`;

export const ShowInfoList = styled.div`
    border-bottom: 3px outset grey;
    border-top: 3px outset grey;
`;

export const DetailsLink = styled(Link)`
    border: 2px solid #e74c3c;
    border-radius: 0.6em;
    box-shadow: 0 0 40px 40px green inset, 0 0 0 0 #3498db;
    text-align: center;
    justify-content: center;
    width: 60px;
    display: inline-block;
    padding: 10px 20px;
    background-color: #4caf50;
    border-radius: 4px;
    color: white;
    text-decoration: none;
    -webkit-transition: all 150ms ease-in-out;
    transition: all 150ms ease-in-out;
    &:not(last-child) {
        margin-bottom: 10px;
    }
    &:focus {
        box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
        color: red;
    }
    &:hover {
        box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
        color: red;
    }
`;
