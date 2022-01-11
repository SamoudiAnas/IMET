import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//images
import Logo from "../assets/Logo.svg";
import ThankYouImage from "../assets/thank_you.svg";

function ThankYou() {
  return (
    <Wrapper>
      <div className="container">
        <div className="logo_container">
          <img src={Logo} alt="" className="logo" />
        </div>
        <div className="thank_you_container">
          <div className="thank_you_message">
            <h1>Thank You!</h1>
            <p>
              We will make sure you are the first person <br />
              to know about our launch!
            </p>
            <Link to="/">
              <button>Go To Homepage</button>
            </Link>
          </div>
          <img src={ThankYouImage} alt="" />
        </div>
      </div>
    </Wrapper>
  );
}

export default ThankYou;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.secondary};
  min-height: 100vh;

  .logo_container {
    width: 100%;
    padding: 3rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .logo {
    width: 8rem;
  }

  .thank_you_container {
    color: white;
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    h1 {
      color: ${(props) => props.theme.primary};
      font-size: 4rem;
    }
  }

  .thank_you_message {
    @media screen and (min-width: 768px) {
      padding-top: 8rem;
    }
  }

  button {
    background-color: ${(props) => props.theme.primary};
    border: 1px solid ${(props) => props.theme.primary};
    white-space: nowrap;
    color: white;
    font-size: 1rem;
    padding: 1.1rem;
    font-weight: 600;
    border: transparent;
    margin-top: 1.5rem;
    &:hover {
      cursor: pointer;
      background-color: #04146d;
    }
  }
`;
