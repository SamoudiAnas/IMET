import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//images
import { ReactComponent as Messages } from "../../assets/email.svg";
import { ReactComponent as Subscriptions } from "../../assets/subscriptions.svg";

function Dashboard() {
  return (
    <Wrapper>
      <div className="nav">
        <Link to="/admin/messages">
          <Messages className="icon" />
          <h3 className="name">Messages</h3>
        </Link>
      </div>
      <div className="nav">
        <Link to="/admin/subscriptions">
          <Subscriptions className="icon" />
          <h3 className="name">Subscriptions</h3>
        </Link>
      </div>
    </Wrapper>
  );
}

export default Dashboard;

const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    justify-content: center;
    align-items: center;
    display: flex;
  }

  text-align: center;

  .nav {
  }

  .icon {
    padding: 1rem;
    width: calc(100% - 4rem);
    height: 10rem;
    margin: 2rem;
    @media screen and (min-width: 768px) {
      width: 10rem;
      height: 10rem;
    }
    fill: white;
    background-color: ${(props) => props.theme.primary};
    cursor: pointer;
  }
`;
