import React, { useState, useEffect, useContext, createContext } from "react";

//utils
import { Sending, Succeeded, Failed } from "../utils/StatusInfos";

const StatusContext = createContext();

function StatusProvider({ children }) {
  const [isStatusShown, setIsStatusShown] = useState(false);
  const [statusInfo, setStatusInfo] = useState(Succeeded);

  useEffect(() => {
    if (isStatusShown) {
      setTimeout(() => {
        setIsStatusShown(false);
      }, 3000);
    }
  }, [isStatusShown]);

  const values = {
    isStatusShown,
    setIsStatusShown,
    statusInfo,
    setStatusInfo,
  };

  return (
    <StatusContext.Provider value={values}>{children}</StatusContext.Provider>
  );
}

export default StatusProvider;

export const useStatusContext = () => {
  return useContext(StatusContext);
};
