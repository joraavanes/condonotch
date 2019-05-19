import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    color: #e91e63;
    font-size: 1em;
    margin: 1em;
    padding: .5em 1em;
    border: 2px solid #e91e63;
    border-radius: 3px;
    background: transparent;
    transform:scale(1);
    transition:all .3s ease-in-out;
    outline:none;

    :hover{
        background:#e91e63;
        color:white;
        cursor:pointer;
        transform:scale(1.1);
    }
`
export default StyledButton;