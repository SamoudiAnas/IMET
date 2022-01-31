import React, { useState,  useContext, createContext } from "react";


const ProfileModalContext = createContext();

function ProfileModalProvider({ children }) {
  const [isMyProfileModalOpen, setIsMyProfileModalOpen] = useState(false);



  const values = {
    isMyProfileModalOpen, setIsMyProfileModalOpen
  };

  return (
    <ProfileModalContext.Provider value={values}>{children}</ProfileModalContext.Provider>
  );
}

export default ProfileModalProvider;

export const useProfileModalContext = () => {
  return useContext(ProfileModalContext);
};