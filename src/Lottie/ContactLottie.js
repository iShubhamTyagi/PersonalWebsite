import React from "react";
import Lottie from "react-lottie";
import animationData from "./ContactLottie.json";
import useWindowDimensions from "../Utils/WindowDimensions";

export default function ContactLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { height, width } = useWindowDimensions();
  const side = width < 601 ? 200 : 300;

  return (
    <div>
      <Lottie options={defaultOptions} height={side} width={side} />
    </div>
  );
}
