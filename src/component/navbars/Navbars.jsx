import React from "react";
import Iamge from "../image/image";
import { Nav } from "./navbars.styled.js";

function Navbars() {
  return (
    <>
      <Nav>
        <Iamge />

        <div className="middle">
          <a className="text1" href="/">
            {" "}
            Home{" "}
          </a>
          <a className="text1" href="/AboutUs">
            {" "}
            AboutUs{" "}
          </a>
        </div>
      </Nav>
    </>
  );
}

export default Navbars;
