import React from "react";
import styled from "styled-components";

//components
import ProgressBar from "../../components/CreateAccountModals/ProgressBar";
import ProfilePicNameModal from "../../components/CreateAccountModals/ProfilePicNameModal";
import Steps from "../../components/CreateAccountModals/Steps";

function NewAccount() {
    return (
        <Wrapper>
            <CreateModal>
                <ProgressBar />
                <ProfilePicNameModal />
                <Steps />
            </CreateModal>
        </Wrapper>
    );
}

export default NewAccount;

const Wrapper = styled.div`
    background-color: ${(props) => props.theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CreateModal = styled.div`
    background-color: white;
    border-radius: 5rem;
    padding: 1rem;
`;
