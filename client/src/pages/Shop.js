import React from "react";
import styled from "styled-components";

//images
import Decoration from "../assets/decoration.svg";
import ShopTitleBG from "../assets/shop_title_bg.svg";
import ShopHeroImg from "../assets/social_tag.png";
import SolutionsBackground from "../assets/solution_bg.svg";
import SolutionsBackgroundMobile from "../assets/solution_bg_mobile.svg";
import How_1 from "../assets/how_1.svg";
import How_2 from "../assets/how_2.svg";
import How_3 from "../assets/how_3.svg";

//components
import Navbar from "../components/Navbar";
import Copyright from "./HomeSections/Copyright";
import Item from "../components/Item";

//utils
import { Products } from "../utils/Products";

function Shop() {
  return (
    <Wrapper>
      <div className="page_title_container">
        <div className="container">
          <Navbar />
        </div>
        <div className="container">
          <h1>OUR OFFERINGS</h1>
        </div>
      </div>

      <div className="container contactless_sharing">
        <div className="contactless_sharing_info">
          <h3>Contactless Sharing</h3>
          <p>
            No need to search your phone for user names on social media or
            wrongly inputting phone numbers, simply tap your Shrizzle tag onto
            another phone and instantly share your custom links, business,
            contact or social media profiles with another person. You choose
            what you want to share!
          </p>
        </div>
        <img src={ShopHeroImg} alt="" />
      </div>

      <h2 className="products_title">OUR UPCOMING PRODUCTS</h2>
      <div className="items_container container">
        {Products.map((product) => (
          <Item key={product.name} product={product} />
        ))}
      </div>

      <div className="how_it_works">
        <h2 className="how_it_works_title">HOW IT WORKS</h2>

        <div className="items_container container">
          <div className="how">
            <img src={How_2} alt="" />
            <h3>
              Set up your personal or business data on the app and apply them to
              the tag
            </h3>
          </div>
          <div className="how">
            <img src={How_1} alt="" />
            <h3>Stick the tag to the back of your phone or your phone case</h3>
          </div>
          <div className="how">
            <img src={How_3} alt="" />
            <h3>Easily share your data</h3>
          </div>
        </div>
        <h3 className="more_info container">
          The receiver doesn't need to have the app, your details would simply
          open up as a webpage. Simply ensure they have their phone connected to
          the internet and has NFC enabled.
        </h3>
      </div>

      <Copyright />
    </Wrapper>
  );
}

export default Shop;

const Wrapper = styled.div`
  .page_title_container {
    background-image: url("${ShopTitleBG}");
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
  .items_container {
    padding: 2rem;
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
    margin-bottom: 4rem;
  }

  .contactless_sharing {
    padding: 2rem;
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 4rem;
    }
    margin-bottom: 8rem;
  }

  .contactless_sharing_info {
    margin: auto 0;
    @media screen and (max-width: 768px) {
      margin-bottom: 2rem;
    }
    h3 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }

  .products_title {
    text-align: center;
    margin-bottom: 1rem;
  }

  .how_it_works {
    background-image: url("${SolutionsBackgroundMobile}");
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 10rem;
    padding-bottom: 120px;

    @media screen and (min-width: 768px) {
      background-image: url("${SolutionsBackground}");
    }
  }

  .how {
    text-align: center;
    img {
      padding: 2rem;
    }

    h3 {
      font-weight: 500;
    }
  }

  .how_it_works_title {
    color: ${(props) => props.theme.primary};
    text-align: center;
    margin: 0 auto 2rem;
    height: 4rem;
    text-align: center;
    font-weight: 700;
    height: 92px;
    text-align: center;
    background-image: url("${Decoration}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 25rem;
  }

  .more_info {
    font-weight: 600;
    font-size: 1.5rem;
    font-style: italic;
    text-align: center;

    position: relative;
    color: ${(props) => props.theme.primary};
    padding: 2rem;
    padding-top: 4rem;
    @media screen and (min-width: 768px) {
      max-width: 80%;
    }

    &::before {
      content: "❝";
      font-size: 6rem;
      color: ${(props) => props.theme.primary};
      position: absolute;
      top: -1rem;
      opacity: 0.5;
      left: -3rem;
      @media screen and (max-width: 768px) {
        top: -1rem;
        left: 1rem;
      }
    }
    &::after {
      content: "❞";
      font-size: 6rem;
      color: ${(props) => props.theme.primary};
      position: absolute;
      bottom: -5rem;
      opacity: 0.5;
      right: 0;
      @media screen and (max-width: 768px) {
        bottom: -6rem;
        right: 3rem;
      }
    }
  }
`;
