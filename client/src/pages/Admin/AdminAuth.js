import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

//images
import loginBG from "../../assets/login_bg.svg";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { useStatusContext } from "../../contexts/StatusContext";
import { Failed, Sending, Succeeded } from "../../utils/StatusInfos";

function AdminAuth() {
  //context
  const { isStatusShown, setIsStatusShown, setStatusInfo } = useStatusContext();

  //input data
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    //if some input is empty
    if (email.trim() === "" || password.trim() === "") {
      setStatusInfo({
        ...Failed,
        message: "Please fill in the form before submitting!",
      });
      setIsStatusShown(true);
      return;
    }

    try {
      //show the status modal
      setStatusInfo({
        ...Sending,
        title: "Waiting...",
        message: "Please wait until we verify your data",
      });
      setIsStatusShown(true);

      //send to the server
      let result = await axios.post(
        "http://vin-anna.com/server/graphql",
        {
          query: `
                query{
                  login(email:"${email}",password:"${password}"){
                    userId
                    token
                    isAdmin
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
      console.log(result);
      if (!result.ok) {
        console.log(result);
      }

      if (result.status === 200) {
        //check if admin
        if (!result.data.data.login.isAdmin) {
          setStatusInfo({
            ...Failed,
            message: "Access Denied!",
          });
          return;
        }
      }
    } catch (err) {
      setStatusInfo({
        ...Failed,
        message: err.response?.data.errors[0].message,
      });
      setIsStatusShown(true);
    }
  };

  return (
    <div>
      <Wrapper>
        <div className="img_container">
          <Logo className="logo" />
        </div>
        <div className="login_container">
          <div>
            <h2>Welcome back!</h2>
            <form>
              <input
                className="credentials"
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                className="credentials"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setpassword(e.target.value)}
              />
              <div className="flex">
                {/* <div className="remember">
                  <input type="checkbox" id="rememberMe" />
                  <label htmlFor="rememberMe"> Remember me?</label>
                </div> */}
              </div>
              <button onClick={handleLogin}>Login</button>
            </form>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default AdminAuth;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  position: relative;

  .img_container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("${loginBG}");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .login_container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
    }

    .credentials {
      width: 100%;
      padding: 0.75rem 1.25rem;
      margin: 0.5rem 0;
      &:focus {
        outline-color: ${(props) => props.theme.secondary};
        border-color: transparent;
      }
    }
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .remember {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      white-space: nowrap;
    }
    a {
      color: ${(props) => props.theme.primary};
      text-decoration: underline;
      &:hover {
        color: ${(props) => props.theme.primaryHover};
      }
    }
    button {
      width: 100%;
      padding: 0.75rem 1.25rem;
      margin: 1rem 0;
      border: transparent;
      background-color: ${(props) => props.theme.secondary};
      font-size: 1rem;
      font-weight: 500;
      color: white;
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
      &:hover {
        cursor: pointer;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
          rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      }
    }
  }
`;
