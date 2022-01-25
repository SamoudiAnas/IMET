import React from "react";
import styled from "styled-components";

//components
import LoadingSpinner from "./LoadingSpinner";

//contexts
import { useStatusContext } from "../contexts/StatusContext";

function Status() {
  const { isStatusShown, statusInfo } = useStatusContext();

  return (
    <Wrapper isStatusShown={isStatusShown} titleColor={statusInfo.titleColor}>
      <div className="icon_container">{statusInfo.icon}</div>

      <div>
        <h3>{statusInfo.title}</h3>
        <p>{statusInfo.message}</p>
      </div>
    </Wrapper>
  );
}

export default Status;

const Wrapper = styled.div`
  position: fixed;
  top: 5rem;
  right: ${(props) => (props.isStatusShown ? "5rem" : "-200%")};
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 7rem;
  width: 30rem;
  padding-left: 1rem;
  background-color: white;
  z-index: 999;
  transition: right 0.4s ease;
  border: 1px solid ${(props) => props.titleColor};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;

  @media screen and (max-width: 768px) {
    top: 5rem;
    right: ${(props) => (props.isStatusShown ? "1rem" : "-200%")};
    width: calc(100% - 2rem);
  }

  h3 {
    color: ${(props) => props.titleColor};
  }

  .icon_container {
    width: 4rem;
    height: 4rem;
  }
`;
