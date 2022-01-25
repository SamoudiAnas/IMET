import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

import template from "../assets/template.png";
import { useStatusContext } from "../contexts/StatusContext";
import { Failed, Succeeded } from "../utils/StatusInfos";

function Item({ product }) {
  const API_URL = "http://vin-anna.com/server/graphql";
  const [isInputShown, setIsInputShown] = useState(false);
  const [email, setEmail] = useState("");
  const { setIsStatusShown, setStatusInfo } = useStatusContext();

  const submitHandler = async () => {
    if (email.trim() === "") {
      setStatusInfo({ ...Failed, message: "Please enter a valid email" });
      setIsStatusShown(true);
    } else {
      let result = await axios.post(API_URL, {
        query: `mutation{
        addInterest(name:"${product.name}",email:"${email}"){
          interestedPeople
        }
      }`,
        headers: { "Content-Type": "application/json" },
      });

      if (result.status === 200) {
        if (result.data.data.addInterest === null) {
          console.log(result);
          setStatusInfo({
            ...Failed,
            message: result.data.errors[0].message,
          });
          setIsStatusShown(true);
        } else {
          setStatusInfo({
            ...Succeeded,
            title: "Thank You!",
            message:
              "We will make  sure you are the first to hear about our launch!",
          });
          setIsStatusShown(true);
        }
      }
      setIsInputShown(false);
    }
  };

  return (
    <Wrapper isInputShown={isInputShown}>
      <div className="product_image_container">
        <img src={product.image} alt="" className="product_image" />
      </div>
      <h3 className="product_title">{product.name}</h3>
      <div className="interest_input">
        <button onClick={() => setIsInputShown(true)}>Interested ?</button>
        <div className="email_input">
          <input
            type="email"
            placeholder="Please enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={submitHandler}>Submit</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Item;

const Wrapper = styled.div`
  .product_image_container {
    display: grid;
    align-self: center;
  }

  .product_image {
    padding: 1rem;
    height: 20rem;
    margin: 0 auto;
    object-fit: contain;
  }

  h3,
  p {
    text-align: center;
  }

  .interest_input {
    position: relative;
    margin-top: 1rem;
    overflow: hidden;

    button {
      width: 100%;
      padding: 0.85rem;
      background-color: ${(props) => props.theme.primary};
      color: white;
      border: transparent;
    }

    .email_input {
      display: flex;
      position: absolute;
      left: ${(props) => (props.isInputShown ? "0" : "100%")};
      top: 0;
      width: 100%;

      z-index: 999;
      color: white;
      transition: all 0.4s ease;

      input {
        width: 100%;
        padding: 0.75rem 1.25rem;
        border: 1px solid ${(props) => props.theme.primary};
      }

      button {
        border: transparent;
        width: 5rem;
      }
    }
  }
`;
