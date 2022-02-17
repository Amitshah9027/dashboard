import React from "react";
import Navbars from "../component/navbars/Navbars";
import { About } from "./About.styled";

function AboutUs() {
  return (
    <About>
      <Navbars />
      <div className="about">
        <p className="p"> About Us</p>
        <p className="p1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
          provident dicta modi vitae maiores veniam laborum culpa? Sunt aliquid
          ullam obcaecati laudantium fugiat ratione labore harum, aliquam dolor
          velit ad?
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          perferendis minus nesciunt non, natus, inventore eum quisquam quo
          autem iusto pariatur facere maxime eaque corporis?
          <br />
          Minus cum itaque in soluta. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatibus, velit dolor.
          <br />
          Deserunt sit saepe, nam eum iure nostrum consequatur dolorum ullam
          dignissimos molestiae repellendus voluptates, velit pariatur
          exercitationem inventore qui?
        </p>
      </div>
    </About>
  );
}

export default AboutUs;
