import React from "react";
import styled from "styled-components";

function Copyright() {
  return (
    <Wrapper>
      <p>&copy; Copyright 2022 - I.MET</p>
    </Wrapper>
  );
}

export default Copyright;

const Wrapper = styled.div`
  background-color: #002f65;
  color: white;
  padding: 1rem;
  text-align: center;
`;
