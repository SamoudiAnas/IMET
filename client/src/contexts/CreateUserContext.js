import React, { useState, useContext, createContext } from "react";

const CreateUserContext = createContext();

function CreateUserProvider({ children }) {
  const [imageUrl, setImageUrl] = useState("");
  const [bio, setBio] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [website, setwebsite] = useState("");
  const [facebook, setfacebook] = useState("");
  const [twitter, settwitter] = useState("");
  const [instagram, setinstagram] = useState("");
  const [snapshat, setsnapshat] = useState("");
  const [discord, setDiscord] = useState("");
  const [whatsapp, setwhatsapp] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [tiktok, setTiktok] = useState("");

  const values = {
    imageUrl,
    setImageUrl,
    bio,
    setBio,
    phone,
    setphone,
    email,
    setemail,
    website,
    setwebsite,
    facebook,
    setfacebook,
    twitter,
    settwitter,
    instagram,
    setinstagram,
    snapshat,
    setsnapshat,
    discord,
    setDiscord,
    whatsapp,
    setwhatsapp,
    linkedIn,
    setLinkedIn,
    tiktok,
    setTiktok,
  };

  return (
    <CreateUserContext.Provider value={values}>
      {children}
    </CreateUserContext.Provider>
  );
}

export default CreateUserProvider;

export const useCreateUserContext = () => {
  return useContext(CreateUserContext);
};
