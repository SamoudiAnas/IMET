import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { ICONS_PATH } from "../../utils/icons";
import { PROFILE } from "../../utils/profileStructure";

function SocialHandle({ personalProfile }) {
  const [socialHandles, setSocialHandles] = useState([]);
  console.log(personalProfile);

  useEffect(() => {
    for (const [key, value] of Object.entries(personalProfile)) {
      //check if the value is empty or null or undefined so we skip it
      if (value !== "" && value !== null && value !== undefined) {
        //we got the key and we want the icon path for it
        //if the key exists in the profile structure we have
        if (PROFILE.includes(key)) {
          //now that the key actually exists in the profile structure we have
          //we will need to get the convenient icon for it
          //check if the name of the icon match the key of the handle
          const result = ICONS_PATH.find((element) => element.name === key);
          if (result) {
            let socialHandleTemp = {
              name: result.name,
              icon: result.icon,
              value: value,
            };
            //add the social handle to the social handles array
            setSocialHandles((oldData) => [...oldData, socialHandleTemp]);
          }
        }
      }
    }
  }, []);

  return (
    <Wrapper>
      {socialHandles.map((handle) => (
        <div className="handle">{handle.icon}</div>
      ))}
    </Wrapper>
  );
}

export default SocialHandle;

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;

  .handle {
    width: 5rem;
    height: 5rem;
  }
`;
