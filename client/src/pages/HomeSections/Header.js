import React from 'react';
import styled from 'styled-components';

//components
import Navbar from '../../components/Navbar';

//images
import HeroImage from '../../assets/hero_image.svg';
import HeroBackground from '../../assets/hero_bg.svg';
import HeroBackgroundMobile from '../../assets/mobile_hero_bg.svg';

function Header() {
	return (
		<Wrapper>
			<div className="container">
				<Navbar />
				<div className="info_container">
					<img src={HeroImage} alt="" className="hero_img" />
					<div className="title">
						<h1 className="hero_title">Explore</h1>
            <h1 className="hero_title">Vin &amp; Anna's </h1>
            <h1 className="hero_title">Journey</h1>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

export default Header;

const Wrapper = styled.div`
  padding: 4rem 1rem 8rem;
  background-image: url("${HeroBackgroundMobile}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    background-image: url("${HeroBackground}");
    padding-bottom: 12rem;
  }

  .title {
    margin: 2rem 0 5rem;
    color: white;
    font-size: 1.5rem;
    text-align: center;
    @media screen and (min-width: 768px) {
      text-align: left;
      margin: auto 0;
      font-size: 1.75rem;

      &:last-child {
        order: -1;
      }
    }
  }

  .info_container {
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
