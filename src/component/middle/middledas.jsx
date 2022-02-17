import React, { useEffect } from "react";
import { Main } from "./middle.styled.js";
import { useContext } from "react";
import { FetchDataContext } from "../context/dataContext";

function Middledas() {
  const [data, setData] = useContext(FetchDataContext);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <Main>
      <div></div>
      <div className="top">
        <p className="home">Welcome to Dashboard</p>
      </div>
      <div className="top">
        <label className="second">Username</label>
      </div>
      <div className="top">
        <p className="tprd">{data?.name}</p>
      </div>
      <div className="top">
        <label className="fourth">Password</label>
      </div>
      <div className="top">
        <p className="tprd">{data?.password}</p>
      </div>
    </Main>
  );
}

export default Middledas;
