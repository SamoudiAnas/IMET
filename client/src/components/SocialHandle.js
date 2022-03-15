import React from "react";
import styled from "styled-components";

function SocialHandle() {
  return <Wrapper>{Icon}</Wrapper>;
}

export default SocialHandle;

const Wrapper = styled.div`
  .icon {
    width: 4.5rem;
    height: 4.5rem;
    padding: 1rem;
    cursor: pointer;
    border-radius: 0.5rem;
    border: 2px solid ${(props) => props.theme.secondary};
    fill: ${(props) => props.theme.secondary};
    transition: all 0.1s ease;
    &:hover {
      padding: 0.85rem;
    }
  }

  .is_selected {
    border: 4px solid ${(props) => props.theme.primary};
    fill: ${(props) => props.theme.primary};
    position: relative;
  }

  .is_set {
    pointer-events: none;
    position: relative;
    &::before {
      content: "";
      background-image: url(${CheckmarkIcon});
      position: absolute;
      top: -0.6rem;
      right: -1.2rem;
      width: 1.75rem;
      height: 1.75rem;
      z-index: 999;
    }
  }
`;
