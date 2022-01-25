import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

//contexts
import { useStatusContext } from "../../contexts/StatusContext";

//images
import Logo from "../../assets/Logo.svg";
import NotifyBG from "../../assets/notify_bg.svg";

//utils
import { Failed, Succeeded, Sending } from "../../utils/StatusInfos";

function NotifyMe() {
  const history = useHistory();
  const [email, setemail] = useState("");

  //context
  const { isStatusShown, setIsStatusShown, setStatusInfo } = useStatusContext();

  const handleNotify = async (e) => {
    try {
      e.preventDefault();

      //if some input is empty
      if (email.trim() === "") {
        setStatusInfo({
          ...Failed,
          message: "Please fill in the form before submitting!",
        });
        setIsStatusShown(true);
        return;
      }

      //show the status modal
      setStatusInfo(Sending);
      setIsStatusShown(true);

      //send to the server
      let result = await axios.post(
        "http://vin-anna.com/server/graphql",
        {
          query: `
                mutation{
                  createSubscription(email:"${email}"){
                    _id
                  }
                }
                `,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!result.ok) {
        //show the status modal
        setStatusInfo(Failed);
        setIsStatusShown(true);
      }

      if (result.status === 200) {
        //show the status modal
        setStatusInfo({
          ...Succeeded,
          message: "Thank you for your subscription",
        });
        setIsStatusShown(true);
        history.push("/thank-you");
      }
    } catch (err) {
      //show the status modal
      setStatusInfo({
        ...Failed,
        message: err.response.data.errors[0].message,
      });
      setIsStatusShown(true);
    }
  };

  return (
    <Wrapper>
      <center>
        <img src={Logo} class="logo" />
        <p className="description">
          When the world is going digital, why not your way of connecting with
          other people?
          <br /> Sign up to get <span className="highlighted">early</span>{" "}
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
          <button type="submit" onClick={handleNotify}>
            Notify Me
          </button>
        </form>
      </center>
    </Wrapper>
  );
}

export default NotifyMe;

const Wrapper = styled.div`
  background-image: url("${NotifyBG}");
  background-repeat: no-repeat;
  background-size: cover;
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
      max-width: 80%;
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
    transition: all 0.2s ease;
    &::placeholder {
      color: white;
    }

    &:focus {
      border: 2px solid ${(props) => props.theme.secondary};
    }
  }

  .highlighted {
    color: ${(props) => props.theme.secondary};
    font-weight: 700;
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.secondary};
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
    background-color: ${(props) => props.theme.secondary};
    border: 1px solid ${(props) => props.theme.secondary};
    white-space: nowrap;
    color: white;
    font-size: 1rem;
    padding: 1.1rem;
    font-weight: 600;
    border: transparent;
    margin-top: 1.5rem;
    &:hover {
      cursor: pointer;
      background-color: #db810c;
    }

    @media screen and (min-width: 768px) {
      margin-top: 0;
    }
  }
`;
