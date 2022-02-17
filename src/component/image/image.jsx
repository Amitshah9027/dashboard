import React from "react";
import home from "../images/home.png";
import { Left } from "./image.styled.js";

const Iamge = () => {
  return (
    <Left>
      <img className="imgs" src={home} alt="notget" />
    </Left>
  );
};

export default Iamge;
