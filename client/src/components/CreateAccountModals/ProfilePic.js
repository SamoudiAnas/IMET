import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import styled from "styled-components";
import { v4 } from "uuid";

//firebase
import { storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

//images
import { ReactComponent as CameraIcon } from "../../assets/camera_icon.svg";
import ProfilePicTemplate from "../../assets/profile_pic_template.svg";

//contexts
import { useCreateUserContext } from "../../contexts/CreateUserContext";

function ProfilePic() {
  //useStates
  const [image, setImage] = useState(null);
  const { imageUrl, setImageUrl } = useCreateUserContext();
  const [isUrlSet, setIsUrlSet] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (image) {
      uploadFiles();
    } // eslint-disable-next-line
  }, [image]);

  const uploadFiles = () => {
    const storageRef = ref(storage, `images/${v4()}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
        console.log(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);
          setIsUrlSet(true);
        });
      }
    );
  };

  return (
    <Wrapper progress={progress}>
      <h2>Setup your profile picture</h2>
      <div className="profile-image">
        <div className="profile_pic">
          <img src={isUrlSet ? imageUrl : ProfilePicTemplate} alt="" />
        </div>
        <div className="upload-button">
          <CameraIcon className="camera_icon" />

          <input
            className="file-upload"
            type="file"
            accept="image/*"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      {progress > 0 && progress < 100 ? (
        <p className="progress">
          Waiting for image to upload ({progress}% completed)
        </p>
      ) : null}
      {progress > 0 && progress < 100 ? (
        <div className="progressBar">
          <div className="active_percentage"></div>
        </div>
      ) : progress === 0 ? (
        <div></div>
      ) : (
        <Link to="/new-account/bio">
          <button className="continue_button">
            <span>Continue</span>
          </button>
        </Link>
      )}

      <Link to="/new-account/bio">
        <button className="skip_button">
          <span>Skip</span>
        </button>
      </Link>
    </Wrapper>
  );
}

export default ProfilePic;

const Wrapper = styled.div`
  h2 {
    text-align: center;
  }
  .profile_pic {
    margin: 4rem 0 0;
    border-radius: 1000px !important;
    border: 4px solid ${(props) => props.theme.primary};
    width: 16rem;
    height: 16rem;
    display: flex;
    overflow: hidden;

    img {
      object-fit: cover;
    }
  }

  .profile-image {
    position: relative;
    width: 16rem;
    height: 16rem;
    display: block;
    margin: 2rem auto 4rem;
  }

  .upload-button {
    width: 4rem;
    height: 4rem;
    fill: black;
    border-radius: 999px;
    background-color: ${(props) => props.theme.primary};
    position: absolute;
    top: 1rem;
    right: 0rem;
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 9;
    .camera_icon {
      position: absolute;
      cursor: pointer;
      width: 2rem;
    }

    padding: 1rem;

    &:hover {
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      &::before {
        background-color: #999;
      }
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
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
  }

  .progress {
    text-align: center;
    color: ${(props) => props.theme.primary};
    margin-bottom: 1rem;
    color: #555;
    font-style: italic;
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

  .progressBar {
    width: 20rem;
    height: 0.25rem;
    background-color: ${(props) => props.theme.secondary};
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    position: relative;
    overflow: hidden;
  }

  .active_percentage {
    position: absolute;
    width: 20rem;
    height: 0.25rem;
    top: 0;
    left: ${(props) => props.progress + "%"};
    background-color: #555;
  }
`;
