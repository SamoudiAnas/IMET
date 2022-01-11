import React from "react";
import styled from "styled-components";

//images
import AnasImg from "../assets/Anas Samoudi.jpeg";

//icons
import { ReactComponent as WebsiteIcon } from "../assets/web.svg";
import { ReactComponent as LinkedInIcon } from "../assets/linkedin.svg";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as FacebookIcon } from "../assets/facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/instagram.svg";

function TeamMember({ member }) {
  return (
    <Wrapper>
      <img src={member.profilePic} alt="" className="profile_pic" />

      <h3 className="name">{member.name}</h3>
      <div className="profession">{member.role}</div>
      <div className="description">{member.description}</div>
      <div className="links">
        {/*==================  WEBSITE  ==================== */}
        {member.profiles?.website && (
          <a href={member.profiles.website} className="link">
            <WebsiteIcon />
          </a>
        )}

        {/*==================  LINKEDIN  ==================== */}
        {member.profiles?.linkedIn && (
          <a href={member.profiles.linkedIn} className="link">
            <LinkedInIcon />
          </a>
        )}

        {/*==================  GITHUB  ==================== */}
        {member.profiles?.github && (
          <a href={member.profiles.github} className="link">
            <GithubIcon />
          </a>
        )}

        {/*==================  FACEBOOK  ==================== */}
        {member.profiles?.facebook && (
          <a href={member.profiles.facebook} className="link">
            <FacebookIcon />
          </a>
        )}

        {/*==================  INSTAGRAM  ==================== */}
        {member.profiles?.instagram && (
          <a href={member.profiles.instagram} className="link">
            <InstagramIcon />
          </a>
        )}
      </div>

      <div>
        <span className="personality_type">
          <a href={member.personalityLink}>{member.personalityType}</a>
        </span>
      </div>
    </Wrapper>
  );
}

export default TeamMember;
/**
 *
 *
 */
const Wrapper = styled.div`
  background-color: white;
  padding: 1.5rem;
  margin: 1.5rem;
  text-align: center;
  border: 2px solid ${(props) => props.theme.primary};

  .name {
    margin: 1rem 0 0.25rem;
    font-size: 1.5rem;
    color: ${(props) => props.theme.secondary};
  }

  .profession {
    font-style: italic;
    margin: 0 0 1rem;
    color: #707070;
  }

  .description {
    font-size: 0.9rem;
  }

  .links {
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

  .personality_type {
    font-weight: 600;
    border-bottom: 1px dashed #33a474;
    cursor: pointer;

    a {
      color: #33a474;
    }
  }

  .profile_pic {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
`;
