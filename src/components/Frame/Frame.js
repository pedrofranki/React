import React from 'react';
import {StyledFrame, StyledHeader } from './style.css';

function Frame(props) {
    return (
        <div>

        <StyledFrame>
            {props.children}
        </StyledFrame>
        </div>
    )
}

export default Frame;