import React from "react";
import Lottie from "react-lottie";
import animationData from "./WorkLottie.json";
import useWindowDimensions from "../../Utils/WindowDimensions";

export default function WorkLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { height, width } = useWindowDimensions();
  const side = width < 601 ? 200 : 400;

  return (
    <div>
      <Lottie options={defaultOptions} height={side} width={side} />
    </div>
  );
}
