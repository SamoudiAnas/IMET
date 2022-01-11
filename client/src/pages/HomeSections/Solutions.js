import React from "react";
import styled from "styled-components";

//images
import Solution1 from "../../assets/solution1.svg";
import Solution2 from "../../assets/solution 2.svg";
import Solution3 from "../../assets/solution 3.svg";
import Solution4 from "../../assets/solution 4.svg";
import Solution5 from "../../assets/solution 5.svg";
import SolutionsBackground from "../../assets/solution_bg.svg";
import SolutionsBackgroundMobile from "../../assets/solution_bg_mobile.svg";

function Solutions() {
  return (
    <Wrapper>
      <div className="container">
        <h1 className="title">How I.MET transforms their social experiences</h1>
        <h4 class="tagline">
          Revolutionizing the way people connect with each other
        </h4>
        <div className="solutions_container container">
          <div className="solution">
            <img src={Solution1} alt="" className="solution_img" />
            <div className="solution_text text1">
              <div>
                Gives her a <span className="highlighted">tech based</span>{" "}
                digital solution to connect with others via a{" "}
                <span className="highlighted">contactless solution</span>
              </div>{" "}
            </div>
          </div>

          <div className="solution">
            <img src={Solution2} alt="" className="solution_img" />
            <div className="solution_text text2">
              <div>
                Enables him to{" "}
                <span className="highlighted">selectively share</span> his
                social media handles, number, and profiles in one go
              </div>{" "}
            </div>
          </div>

          <div className="solution">
            <img src={Solution3} alt="" className="solution_img" />
            <div className="solution_text text3">
              <div>
                Allows him <span className="highlighted">to connect</span> with
                attendees of an event{" "}
                <span className="highlighted">effectively</span>
              </div>
            </div>
          </div>
          <div className="solution">
            <img src={Solution4} alt="" className="solution_img" />
            <div className="solution_text text4">
              <div>
                <span className="highlighted">Simply taps</span> and share her
                drop location to her date or the new friend she just met
              </div>{" "}
            </div>
          </div>
          <div className="solution">
            <img src={Solution5} alt="" className="solution_img" />
            <div className="solution_text text5">
              <div>
                Powers her to create a{" "}
                <span className="highlighted">digital portfolio</span> of
                product and service offerings, collect reviews, and{" "}
                <span className="highlighted">engage with her customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Solutions;

const Wrapper = styled.div`
  background-image: url("${SolutionsBackgroundMobile}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  padding-top: 250px;
  padding-bottom: 120px;

  @media screen and (min-width: 768px) {
    background-image: url("${SolutionsBackground}");
  }

  .title {
    color: #00285c;
    font-weight: 750;
    margin: 0;
    text-align: center;
  }

  .highlighted {
    color: #ff9100;
    font-weight: 700;
    position: relative;
    z-index: 999;
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.primary};
  }

  .solution {
    margin: 2rem auto;
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      margin-bottom: 6rem;
      &:nth-child(2) {
        flex-direction: row-reverse;
      }
      &:nth-child(4) {
        flex-direction: row-reverse;
      }
    }
  }

  .solution_text {
    padding: 1rem;
    text-align: center;
    font-weight: 600;
    color: ${(props) => props.theme.primary};
    @media screen and (min-width: 768px) {
      width: 25rem;
      text-align: left;
      padding: 0;
    }
    font-size: 1.7em;
  }

  .solution_img {
    width: 100%;
    padding: 0 2rem;
    margin: 4rem auto 0;
    @media screen and (min-width: 768px) {
      width: 30rem;
      margin: 0;
    }
  }

  .tagline {
    text-align: center;
    font-style: italic;
    font-size: 1.5rem;
    margin: 0.5rem 0;
    color: #2e2e2e;
    margin-bottom: 8rem;
  }
`;
