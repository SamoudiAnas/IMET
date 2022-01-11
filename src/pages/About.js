import React from "react";
import styled from "styled-components";

//components
import Navbar from "../components/Navbar";
import Copyright from "./HomeSections/Copyright";

//images
import AboutImg from "../assets/about.png";
import AboutTitleBg from "../assets/about_title_bg.svg";
import TeamBackground from "../assets/solution_bg.svg";
import TeamBackgroundMobile from "../assets/solution_bg_mobile.svg";
import Decoration from "../assets/decoration.svg";
import TeamMember from "../components/TeamMember";
import { Team } from "../utils/Team";
function About() {
  return (
    <Wrapper>
      <div className="page_title_container">
        <div className="container">
          <Navbar />
        </div>
        <div className="container">
          <h1>ABOUT US</h1>
        </div>
      </div>

      <div className="about_imet container">
        <img src={AboutImg} alt="" />
        <div className="about_text">
          <h2>ABOUT I.MET</h2>
          <p>
            I.MET aims to revolutionize the way people connect with each other
            by transforming their social experiences. I.MET, a tech-startup
            based in the UK and is part of the Business Support Services
            Industry.
            <br /> <br />
            We are a developer of information sharing technology designed to
            instantly share any data using various product categories such as
            card, ring, key chain, pop-up sticker, etc. The product helps people
            in sharing profile data with other people and keep a history of
            everyone that they connected with and access their data at any time
            at anywhere.
            <br /> <br />
            We bring you a contactless and touchless solution much needed to
            replace the now outdated practices of shaking hands, exchanging
            business cards, or typing on a stranger’s phone.
          </p>
        </div>
      </div>
      <div className="imet_team ">
        <div className="container">
          <h2>OUR PROFESSIONAL TEAM</h2>
          <div className="team_members">
            {Team.map((member) => (
              <TeamMember member={member} />
            ))}
          </div>
        </div>
      </div>
      <Copyright />
    </Wrapper>
  );
}

export default About;

const Wrapper = styled.div`
  .page_title_container {
    background-image: url("${AboutTitleBg}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    padding: 4rem 1rem 8rem;
    margin-bottom: 8rem;

    h1 {
      color: white;
      font-size: 2.5rem;
    }
  }

  .about_imet {
    padding: 1rem 2rem;
    margin-bottom: 4rem;
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }

    img {
      margin-bottom: 2rem;
    }

    h2 {
      color: ${(props) => props.theme.primary};
      margin-bottom: 1rem;
    }
  }

  .imet_team {
    background-image: url("${TeamBackgroundMobile}");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 8rem 0 4rem;
    @media screen and (min-width: 768px) {
      background-image: url("${TeamBackground}");
    }

    h2 {
      color: ${(props) => props.theme.primary};
      text-align: center;
      margin: 0 auto 2rem;
      height: 4rem;
      text-align: center;
      font-weight: 600;
      height: 92px;
      text-align: center;
      background-image: url("${Decoration}");
      background-position: center;
      background-repeat: no-repeat;
      background-size: 25rem;
    }
  }

  .team_members {
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
