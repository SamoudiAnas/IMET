import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//contexts
import { useCreateUserContext } from "../../contexts/CreateUserContext";

function UserBio() {
  const { setBio } = useCreateUserContext();
  return (
    <Wrapper>
      <h2>Tell us a bit about yourself</h2>
      <textarea
        placeholder="Enter bio..."
        rows="6"
        onChange={(e) => setBio(e.target.value)}
      />
      <Link to="/new-account/social-handles">
        <button className="continue_button">
          <span>Continue</span>
        </button>
      </Link>

      <Link to="/new-account/social-handles">
        <button className="skip_button">
          <span>Skip</span>
        </button>
      </Link>
    </Wrapper>
  );
}

export default UserBio;

const Wrapper = styled.div`
  h2 {
    text-align: center;
  }

  textarea {
    width: 100%;
    margin: 2.5rem 0 1rem;
    padding: 1rem 1.5rem;
    border: 1px solid ${(props) => props.theme.primary};

    &:focus {
      border: 2px solid ${(props) => props.theme.primary};
    }
  }

  .continue_button {
    position: relative;
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

  .skip_button {
    position: relative;
    margin: 0.5rem auto 1rem;
    display: block;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: underline;
    border: transparent;
    color: #555;
  }
`;
