import React from "react";
import Iamge from "../image/image";
import Socialmedia from "../socialmedia/socialmedia";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Nav } from "./navbar.styled.js";
// import home from "";

function Navbar() {
  return (
    <>
      <Nav>
        <Iamge />

        <div className="middle">
          <a className="text1" href="#">
            {" "}
            Home{" "}
          </a>
          <a className="text1" href="#">
            {" "}
            AboutUs{" "}
          </a>
          <a className="text1" href="#">
            {" "}
            Login{" "}
          </a>
        </div>
        <div className="right">
          {" "}
          <div className="check">
            <AccountCircleIcon className="social" />
          </div>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;
