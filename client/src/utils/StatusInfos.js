//icons
import { ReactComponent as DangerIcon } from "../assets/danger.svg";
import { ReactComponent as SuccessIcon } from "../assets/success.svg";
import LoadingSpinner from "../components/LoadingSpinner";

export const Sending = {
  title: "Sending...",
  titleColor: "#ff9100",
  message: "Please wait until the message is sent!",
  icon: <LoadingSpinner />,
};

export const Succeeded = {
  title: "Success!",
  titleColor: "#078555",
  message: "We  have received your messages!",
  icon: <SuccessIcon />,
};

export const Failed = {
  title: "Failed!",
  titleColor: "#e00d0d",
  message: "Something went wrong! Please try again!",
  icon: <DangerIcon />,
};
