import React from "react";
import styled from "styled-components";

function ProgressBar() {
    return (
        <Wrapper>
            <div></div>
        </Wrapper>
    );
}

export default ProgressBar;

const Wrapper = styled.div`
    background-color: black;
    border-radius: 13px;
    /* (height of inner div) / 2 + padding */
    padding: 3px;

    & > div {
        background-color: orange;
        width: 40%;
        /* Adjust with JavaScript */
        height: 20px;
        border-radius: 10px;
    }
`;
