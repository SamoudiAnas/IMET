import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";

//images
import ContactBg from "../../assets/contact_bg.svg";
import My from "../../assets/my.jpg";

//helpers
import { getUserData2 } from "../../helpers/AuthHelpers/GetUserData";

//contexts
import { useAuthContext } from "../../contexts/AuthContext";
import SocialHandle from "../../components/MyProfile/SocialHandles";

function MyProfile() {
  const { token, currentUser, setCurrentUser } = useAuthContext();

  useEffect(() => {
    const getUserProfile = async () => {
      const userData = await getUserData2(
        token || localStorage.getItem("token")
      );

      if (userData.status === 200) {
        setCurrentUser(userData.data.data.getUserData);
      }
    };
    getUserProfile();
  }, []);

  return (
    <Wrapper>
      <div className="page_title_container">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <div className="layout container">
        <div>
          <img
            src={currentUser?.personalProfile?.profilePic}
            alt=""
            className="profile_pic"
          />
        </div>
        <div className="profile_info">
          <h2 className="profile_name">{currentUser?.fullName}</h2>
          <p>
            <span className="profile_type">Personal Profile</span>
          </p>

          <div className="personal_info">
            <div className="about_container">
              <div className="title_container">
                <h3>About</h3>
                <div className="line"></div>
              </div>
              <p>{currentUser?.personalProfile?.bio}</p>
            </div>
            <div className="title_container">
              <h3>Address</h3>
              <div className="line"></div>
            </div>
            <p>
              {currentUser?.address === ""
                ? "No Address to show"
                : currentUser?.fullName}
            </p>
          </div>
          <div className="social_handles">
            <div className="title_container">
              <h3>Social Handles</h3>
              <div className="line"></div>
            </div>
            <SocialHandle personalProfile={currentUser?.personalProfile} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default MyProfile;

const Wrapper = styled.div`
  .page_title_container {
    background-image: url("${ContactBg}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    padding: 3rem 1rem 20rem;
    margin-bottom: 4rem;

    h1 {
      color: white;

      font-size: 2.5rem;
    }

    p {
      color: white;
    }
  }

  .layout{
    margin-top: -20rem;
    padding: 0 2rem;
    @media screen and (min-width:768px){
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 4rem;
    }
  }
  .title_container{
    display: flex;
    align-items: center;

    h3 {
      margin-bottom: 1rem;}
  }

  .line{
    flex: 1;
    height: 1px;
    background-color: #aaaaaa;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }


  .profile_pic{
    width: 100%;
    height:35rem;
    object-fit: cover;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  .profile_name{
    color: white;
    font-size: 2.5em;
    margin-bottom: 2rem;
  }

  .profile_type{
    background-color: white;
    color: black;
    padding: 1rem 2rem;
    margin: 1rem 0;
  }

  

  hr{
    opacity: 0.9;
  }

  .personal_info{
    margin-top: 8rem;
  }

  .about_container{
    margin: 2rem 0;

    
  }

  .social_handles{
    margin-top: 2rem;
  }

  @media screen and (max-width:768px) {
    .profile_name{
      color: #111;
    }
.profile_type{
  color: white;
  background-color: #111;
}
  }

`;
