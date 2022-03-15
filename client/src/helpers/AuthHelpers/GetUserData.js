import axios from "axios";
import { API_URL } from "../../utils/apiUrl";
import { Failed } from "../../utils/StatusInfos";

export const getUserData = async (
  token,
  setUserData,
  setisLoggedIn,
  setStatusInfo
) => {
  try {
    let result = await axios.post(
      API_URL,
      {
        query: `
        query{
          getUserData{
            _id
            fullName
            email
						address
            personalProfile{
							_id
						}
          }
        }
      `,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );

    //if request failed
    if (result.status !== 200) {
      setStatusInfo(Failed);
      return;
    } else {
      //if request got reject by the server
      if (result.data.data.getUserData === null) {
        return;
      } else {
        setisLoggedIn(true);
        setUserData(result.data.data.getUserData);
        return result.data.data.getUserData;
      }
    }
  } catch (err) {
    //setStatusInfo(Failed);
    console.log(err);
  }
};

export const getUserData2 = (token) => {
  return axios.post(
    API_URL,
    {
      query: `
      query{
        getUserData {
          _id
          fullName
          email
          address
          plan {
            name
          }
          personalProfile {
            bio
            tinder
            twitter
            discord
            facebook
            linkedIn
            snapshat
            whatsapp
            instagram
            profilePic
            customLink
            phoneNumber
            tiktok
          }
          businessProfile {
            bio
            tinder
            twitter
            discord
            facebook
            linkedIn
            snapshat
            whatsapp
            instagram
            profilePic
            customLink
            phoneNumber
          }
        }
      }
      `,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );
};
