import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

//images
import Logo from "../../assets/Logo.svg";

function NotifyMe() {
  const history = useHistory();
  const [email, setemail] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    axios({
      url: "https://formspree.io/f/myyozdrd",
      method: "post",
      headers: {
        Accept: "application/json",
      },
      data: {
        email: email,
      },
    }).then((response) => {
      if (response.status === 200) {
        history.push("/thank-you");
      }
    });
  };

  return (
    <Wrapper>
      <center>
        <img src={Logo} class="logo" />
        <p className="description">
          When the world is going digital, why not your business card Sign up to
          get <span className="highlighted">early</span>{" "}
          <span className="highlighted">access</span> and more about our launch.
        </p>
        <form>
          <input
            type="email"
            name="_replyto"
            placeholder="Please enter your email adress"
            onChange={(e) => setemail(e.target.value)}
            required
          />
          <button type="submit" onClick={handleForm}>
            Notify Me
          </button>
        </form>
      </center>
    </Wrapper>
  );
}

export default NotifyMe;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.secondary};
  padding: 3rem 2rem 5rem;

  .logo {
    width: 8rem;
    margin-bottom: 4rem;
  }

  .description {
    margin: 0;
    text-align: center;
    font-size: 1.65rem;
    width: 100%;

    color: white;
    margin-bottom: 2rem;
    @media screen and (min-width: 768px) {
      max-width: 50%;
    }
  }

  input {
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0);
    color: white;
    width: 100%;
    padding: 1rem 2rem;
    outline: none;
    font-size: 1.1em;

    &::placeholder {
      color: white;
    }
  }

  .highlighted {
    color: ${(props) => props.theme.primary};
    font-weight: 700;
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.primary};
  }

  form {
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 4fr 1fr;
      gap: 2rem;
      align-items: center;
      max-width: 50%;
    }
  }

  button {
    width: 100%;
    background-color: #003e79;
    border: 1px solid #003e79;
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

    @media screen and (min-width: 768px) {
      margin-top: 0;
    }
  }
`;
