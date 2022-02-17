import React from "react";
import Middledas from "../component/middle/middledas";
import Navbars from "../component/navbars/Navbars";
import Footer from "../component/Footer/Footer";
import { Divid } from "./Dashboardss.styled";

function Dashboards() {
  return (
    <Divid>
      <Navbars />
      <Middledas />
      <Footer />
    </Divid>
  );
}

export default Dashboards;
