import React from "react";
import { Footers } from "./Footer.styled.js";
function Footer() {
  return (
    <Footers>
      <div className="upper">
        {" "}
        <div className="fix">
          <a href="/">Home</a>

          <a href="/">AboutUs</a>

          <a href="/">ContactUs</a>
        </div>
      </div>
      <div className="lower">
        {" "}
        <p className="copy">@copyrightWitslab</p>
      </div>
    </Footers>
  );
}

export default Footer;
