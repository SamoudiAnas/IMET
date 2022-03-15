import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

//images
import { ReactComponent as WelcomeImg } from "../../assets/auth/welcome.svg";

function WelcomeMessage() {
  let { url } = useRouteMatch();
  return (
    <Wrapper>
      <h1>
        Welcome to <span>Shrizzle.me</span>
      </h1>
      <WelcomeImg className="welcome_img" />

      <Link to={`${url}/profile-pic`}>
        <button>Setup my Personal Account</button>
      </Link>
    </Wrapper>
  );
}

export default WelcomeMessage;

const Wrapper = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 2rem;

    span {
      color: ${(props) => props.theme.secondary};
      text-decoration: underline;
      text-decoration-color: ${(props) => props.theme.primary};
    }
  }

  .welcome_img {
    width: 20rem;
    display: block;
    margin: 0 auto 2rem;
  }

  p {
    text-align: center;
    font-style: italic;
    margin-bottom: 2rem;
    color: #555;
  }

  input {
    width: 100%;
    margin: 0.5rem 0 1rem;
    padding: 1rem 1.5rem;
    border: 1px solid ${(props) => props.theme.primary};

    &:focus {
      border: 2px solid ${(props) => props.theme.primary};
    }
  }

  button {
    margin: 0.5rem auto 1rem;
    display: block;
    padding: 1rem 2.5rem;
    font-size: 1rem;
    border: transparent;
    color: white;
    background-color: ${(props) => props.theme.primary};

    &:hover {
      cursor: pointer;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
  }
`;
