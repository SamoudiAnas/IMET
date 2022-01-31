import React, { useEffect } from 'react';
import styled from 'styled-components';

//contexts
import { useAuthContext } from '../contexts/AuthContext';

//icons
import { ReactComponent as WebsiteIcon } from "../assets/web.svg";
import { ReactComponent as LinkedInIcon } from "../assets/linkedin.svg";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as FacebookIcon } from "../assets/facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/instagram.svg";
import { ReactComponent as PhoneIcon } from '../assets/phone_icon.svg';
import { ReactComponent as EmailIcon } from '../assets/email_icon.svg';
import { ReactComponent as TwitterIcon } from '../assets/twitter_icon.svg';
import { ReactComponent as SnapshatIcon } from '../assets/snapshat_icon.svg';
import { ReactComponent as DiscordIcon } from '../assets/discord_icon.svg';
import { ReactComponent as WhatsappIcon } from '../assets/whatsapp_icon.svg';
import { ReactComponent as LocationIcon } from '../assets/location_icon.svg';

//images
import ProfilePicTemplate from '../assets/profile_pic_template.svg';
import ProfilePicBG from '../assets/profile_bg.svg';
import ProfilePicBGMobile from '../assets/profile_bg_mobile.svg';

//utils
import { getUserData } from '../helpers/AuthHelpers/GetUserData';

//contexts
import { useStatusContext } from '../contexts/StatusContext';
import { useProfileModalContext } from '../contexts/ProfileModalContext';

function UserProfileModal() {
	const { currentUser,setCurrentUser,setisLoggedIn } = useAuthContext();
  const {setStatusInfo} = useStatusContext()
  //user profile modal
	const {setIsMyProfileModalOpen} = useProfileModalContext();

  useEffect(() => {
    getUserData(localStorage.getItem("token"),setCurrentUser,setisLoggedIn,setStatusInfo)
  }, []);
  
  const isProfilePic = ()=>{
    if(currentUser !== undefined &&  currentUser !== null){
      if(currentUser.profilePic !== "" && currentUser.profilePic !== undefined ){
      return true
    }
    }
    
  }

  const isAddress = ()=>{
    if(currentUser !== undefined &&  currentUser !== null){
      if(currentUser.address !== "" && currentUser.address !== undefined && currentUser.address !== null ){
      return true
    }
    }
    
  }


	return (
		<Wrapper>
			<div className="modal_container">
				<div className="img_container">
					<div className="profile_pic_container">
						<img src={isProfilePic() ? currentUser?.profilePic:ProfilePicTemplate} alt="" className="profile_pic" />
					</div>
				</div>

        <h3 className='userName'>{currentUser?.fullName}</h3>
        
        {isAddress && <div className="address_container">
          <LocationIcon className="address_icon" />
          <p className='address'>{currentUser?.address}</p>
        </div>
          
        }

        <div className="hr"></div>
        <p className='bio'>{currentUser?.bio}</p>

        <div className="hr hr_2"></div>
        <div className="social_handles">
          {/*==================  PHONE  ==================== */}
        {currentUser?.phoneNumber && (
          <a href={"https://"+currentUser.phoneNumber} target="_blank" className="link">
            <PhoneIcon className="icon"/>
          </a>
        )}

        {/*==================  EMAIL  ==================== */}
        {currentUser?.instagram && (
          <a href={"https://"+currentUser.instagram} target="_blank" className="link">
            <EmailIcon className="icon"/>
          </a>
        )}
          {/*==================  WEBSITE  ==================== */}
        {currentUser?.website && (
          <a href={"https://"+currentUser.website} target="_blank" className="link">
            <WebsiteIcon className="icon"/>
          </a>
        )}

        {/*==================  LINKEDIN  ==================== */}
        {currentUser?.linkedIn && (
          <a href={"https://"+currentUser.linkedIn}target="_blank" className="link">
            <LinkedInIcon className="icon"/>
          </a>
        )}

        {/*==================  GITHUB  ==================== */}
        {currentUser?.github && (
          <a href={"https://"+currentUser.github} target="_blank" className="link">
            <GithubIcon className="icon"/>
          </a>
        )}

        {/*==================  FACEBOOK  ==================== */}
        {currentUser?.facebook && (
          <a href={"https://"+currentUser.facebook} target="_blank"  className="link">
            <FacebookIcon className="icon"/>
          </a>
        )}

        {/*==================  INSTAGRAM  ==================== */}
        {currentUser?.instagram && (
          <a href={"https://"+currentUser.instagram} target="_blank" className="link">
            <InstagramIcon className="icon"/>
          </a>
        )}

        

        {/*==================  twitter  ==================== */}
        {currentUser?.twitter && (
          <a href={"https://"+currentUser.twitter} target="_blank" className="link">
            <TwitterIcon className="icon"/>
          </a>
        )}

        {/*==================  snapshat  ==================== */}
        {currentUser?.snapshat && (
          <a href={"https://"+currentUser.snapshat} target="_blank" className="link">
            <SnapshatIcon className="icon"/>
          </a>
        )}

        {/*==================  discord  ==================== */}
        {currentUser?.discord && (
          <a href={"https://"+currentUser.discord} target="_blank" className="link">
            <DiscordIcon className="icon"/>
          </a>
        )}

        {/*==================  Whatsapp  ==================== */}
        {currentUser?.whatsapp && (
          <a href={"https://"+currentUser.whatsapp} target="_blank" className="link">
            <WhatsappIcon className="icon"/>
          </a>
        )}
        </div>

        <div className="buttons_container">
          <button className='copy'>Copy your profile link</button>
          <button className='close' onClick={() =>setIsMyProfileModalOpen(false)}>Close</button>
        </div>
			</div>

		</Wrapper>
	);
}

export default UserProfileModal;

const Wrapper = styled.div`

	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .hr{
    width: 90%;
    margin: 1rem auto 0;
    height: 1px;
    background-color: #eee;
  }

  .hr_2{
    margin-bottom: 1rem;
  }

	.modal_container {
    background-image: url(${ProfilePicBG});

    @media screen and (max-width:768px){
      background-image: url(${ProfilePicBGMobile});
      width:calc(100% - 2rem);
      margin: 1rem 0;
    }

    background-repeat: no-repeat;
    background-size: 100%;
		background-color: white;
    width: 40vw;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
	}

  .profile_pic_container{
    margin: 2rem auto ;
    border-radius: 1000px !important;
    border: 4px solid ${(props) => props.theme.primary};
    width: 12rem;
    height: 12rem;
    display: flex;
    overflow: hidden;

    img{
      width: 100%;
      object-fit: cover;
    }
  }

  .userName{
    font-size: 1.5rem;
    text-align: center;
  }

  .bio{
    padding: 2rem;
    text-align: center;
    font-style: italic;
    color: #555;
  }


  .address_container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    margin: 2rem;
  }
  .address_icon{
    width: 2rem;
    height: 2rem;
  }

  .address{
    text-align: center;
  }

  .social_handles {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    margin: 1rem 0;
  }

  .link {
    padding: 0.85rem;
    width: 3rem;
    height: 3rem;
    background-color: ${(props) => props.theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 55px;
    &:hover {
      background-color: ${(props) => props.theme.secondary};
    }
  }

  .icon{
    fill: white;
  }



  .buttons_container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 4rem;
  }

  .copy{
    margin: 0 ;
		padding: 1rem 2.5rem;
		font-size: 1rem;
		border: transparent;
		color: white;
		background-color: ${(props) => props.theme.primary};

		&:hover {
			cursor: pointer;
			box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
		}
  }

  .close{
    margin: 0rem ;
		padding: 1rem 2.5rem;
		font-size: 1rem;
		border: transparent;
		color: white;
		background-color: #151515;

    @media screen and (max-width:768px){
     margin-bottom: 3rem;
    }


		&:hover {
			cursor: pointer;
			box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
		}
  }
`;
