import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

//contexts
import { useCreateUserContext } from '../../contexts/CreateUserContext';
import { useStatusContext } from '../../contexts/StatusContext';
import { useAuthContext } from '../../contexts/AuthContext';
import { useProfileModalContext } from '../../contexts/ProfileModalContext';

//firebase
import { storage } from '../../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

//components
import Navbar from '../../components/Navbar';
import Copyright from '../HomeSections/Copyright';

//images
import { ReactComponent as CameraIcon } from '../../assets/camera_icon.svg';
import CreateAccountTitleBg from '../../assets/create_account_title_bg.svg';
import ProfilePicTemplate from '../../assets/profile_pic_template.svg';
import SocialHandleSetup from '../../components/SocialHandleSetup';

//utils
import { Failed, Succeeded } from '../../utils/StatusInfos';
import { API_URL } from '../../utils/apiUrl';
import { getUserData } from '../../helpers/AuthHelpers/GetUserData';

function CreateAccount() {
	//user profile modal
	const {setIsMyProfileModalOpen} = useProfileModalContext();

	//history react router dom
	const history = useHistory();

	//get the token from the auth context
	const { token,  currentUser,setCurrentUser } = useAuthContext();

	//status message context
	const { setIsStatusShown, setStatusInfo } = useStatusContext();

	//get inputs from context
	const { phone, email, website, facebook, twitter, instagram, snapshat, discord, whatsapp } = useCreateUserContext();

	//input data
	const [ bio, setbio ] = useState('');
	const [ address, setaddress ] = useState('');

	//image
	const [ image, setImage ] = useState(null);
	const [ url, setUrl ] = useState('');
	const [ isUrlSet, setIsUrlSet ] = useState(false);
	const [ progress, setProgress ] = useState(0);




	useEffect(() => {
		getUserData(localStorage.getItem("token"),setCurrentUser)
		console.log(currentUser);
		if(currentUser !== null){
			if(currentUser.phoneNumber !== "" && currentUser.phoneNumber !== null ){
				setIsMyProfileModalOpen(true)
				history.push("/")
			}
		}
	}, [currentUser]);
	

	const handleChange = (e) => {
		console.log(e);
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
			console.log(image);
		}
	};

	useEffect(
		() => {
			if (image) {
				uploadFiles();
			}
		},
		[ image ]
	);

	const uploadFiles = () => {
		const storageRef = ref(storage, `images/${v4()}`);
		console.log(storageRef);
		const uploadTask = uploadBytesResumable(storageRef, image);

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
				setProgress(prog);
			},
			(error) => console.log(error),
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setUrl(downloadURL);
					setIsUrlSet(true);
				});
			}
		);
	};

	//handle creation of profile
	const handleProfileCreation = async () => {
		//conditions
		if (phone === '') {
			setStatusInfo({ ...Failed, message: 'Please enter at least your phone number!' });
			return;
		}

		let result = await axios.post(
			API_URL,
			{
				query: `
                mutation{
                  updateProfile(profileInfoInput:{address:"${address}",bio:"${bio}",profilePic:"${url}",phoneNumber:"${phone}", instagram:"${instagram}", facebook:"${facebook}", linkedIn:"",customLink:"${website}",snapshat:"${snapshat}",whatsapp:"${whatsapp}",twitter:"${twitter}",discord:"${discord}"}){
                    _id
                  }
                }
      `
			},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + token
				}
			}
		);

		if (result.status !== 200) {
			setStatusInfo(Failed);
			setIsStatusShown(true);
		}

		if (result.status === 200) {
			setStatusInfo({ ...Succeeded, message: 'Your profile is updated!!!' });
			setIsStatusShown(true);
			history.push('/my-profile');
		}
	};

	return (
		<Wrapper>
			<div className="page_title_container">
				<div className="container">
					<Navbar />
				</div>
				<div className="container">
					<h1>Create your profile</h1>
				</div>
			</div>

			<div className="profile_info container">
				<div>
					<h2>Setup your profile picture</h2>
					<div className="profile-image">
						<div className="profile_pic">
							<img src={isUrlSet ? url : ProfilePicTemplate} alt="" />
						</div>
						<div className="upload-button">
							<CameraIcon className="camera_icon" />

							<input className="file-upload" type="file" accept="image/*" onChange={(e) => handleChange(e)} />
						</div>
					</div>
					{progress > 0 && progress < 100 ? (
						<p className="progress">Waiting for image to upload ({progress}% completed)</p>
					) : null}
					{progress === 100 ? <p className="progress">Image uploaded!</p> : null}
				</div>
				<div className="profile_inputs">
					<h2>LET'S GET YOU STARTED</h2>
					<input type="text" placeholder="Address" value={address} onChange={(e) => setaddress(e.target.value)} />
					<textarea
						type="text"
						rows="5"
						placeholder="Your bio ..."
						value={bio}
						onChange={(e) => setbio(e.target.value)}
					/>
				</div>
			</div>

			<SocialHandleSetup />

			<div className="button_container">
				<button className="create_button" onClick={handleProfileCreation}>
					Create my profile
				</button>
			</div>

			<Copyright />
		</Wrapper>
	);
}

export default CreateAccount;

const Wrapper = styled.div`
.page_title_container {
    background-image: url("${CreateAccountTitleBg}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    padding: 3rem 1rem 8rem;
    margin-bottom: 8rem;

    h1 {
      color: white;
      font-size: 2.5rem;
    }
  }


  .profile_info {
    padding: 1rem 2rem;
    margin-bottom: 4rem;
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }


    h2 {
      color: ${(props) => props.theme.primary};
      margin-bottom: 1rem;
    }
  }

  input,
    textarea {
      width: 100%;
      margin: 0.5rem 0 1rem;
      padding: 1rem 1.5rem;
      border: 1px solid ${(props) => props.theme.primary};

      &:focus {
        border: 2px solid ${(props) => props.theme.primary};
      }
    }


  .profile_pic{
    margin: 2rem 0 0 4rem;
    border-radius: 1000px !important;
    border: 4px solid ${(props) => props.theme.primary};
    width: 16rem;
    height: 16rem;
    display: flex;
    overflow: hidden;

    img{
      object-fit: cover;
    }
  }

  .profile-image{
    position: relative;
    width: 16rem;
    height: 16rem;
    margin-bottom: 4rem;
  }


  .upload-button {
    width:4rem;
    height: 4rem;
    fill: black;
    border-radius: 999px;
    background-color: ${(props) => props.theme.primary};
    position: absolute;
    top: 1rem;
    right: -4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
      z-index: 9;
    .camera_icon{
      position: absolute;
        cursor: pointer;
      width: 2rem;
    }

    padding: 1rem;

   
      &:hover {
        cursor: pointer;
        transition: all .3s cubic-bezier(.175, .885, .32, 1.275);
        &::before{
        background-color: #999;}
      }
  }

  .file-upload {
   opacity: 0;
  }

  .create_button {
		margin: 0.5rem auto 1rem;
		padding: 1rem 2.5rem;
		font-size: 1rem;
		width: 20rem;
		border: transparent;
		color: white;
		background-color: ${(props) => props.theme.primary};

		&:hover {
			cursor: pointer;
			box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
		}
	}

  .button_container{
    display: flex;justify-content: center;align-items:center;
    margin: 4rem 0;
  }


  .progress{
    text-align: center;
    color: ${(props) => props.theme.primary};
    padding-right: 8rem;
  }

`;
