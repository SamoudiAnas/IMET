import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import ProfilePic from "../../components/CreateAccountModals/ProfilePic";
import UserBio from "../../components/CreateAccountModals/UserBio";
import WelcomeMessage from "../../components/CreateAccountModals/WelcomeMessage";
import SocialHandleSetup from "../../components/SocialHandleSetup";

function CreateNewAccount() {
  let { path } = useRouteMatch();
  console.log(path);
  return (
    <Wrapper>
      <ModalContainer>
        <Switch>
          <Route exact path={path}>
            <WelcomeMessage />
          </Route>
          <Route exact path={`${path}/profile-pic`}>
            <ProfilePic />
          </Route>
          <Route exact path={`${path}/bio`}>
            <UserBio />
          </Route>
          <Route exact path={`${path}/social-handles`}>
            <SocialHandleSetup />
          </Route>
        </Switch>
      </ModalContainer>
    </Wrapper>
  );
}

export default CreateNewAccount;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.primary};
`;

const ModalContainer = styled.div`
  width: 40rem;
  height: auto;
  background-color: white;
  padding: 2rem 3rem;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;
