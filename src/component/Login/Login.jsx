import React, { useState, useContext } from "react";
import { Logins } from "./Login.styled.js";
import { FetchDataContext } from "../context/dataContext.js";
import { useNavigate } from "react-router-dom";
import { userSchema } from "../validation/validation";

function Login() {
  const history = useNavigate();
  const [name, setMail] = useState(null);
  const [password, setPassword] = useState(null);
  const [data, setData] = useContext(FetchDataContext);

  const clickData = async () => {
    let form = {
      name: name,
      password: password,
    };
    const isvalid = await userSchema.isValid(form);
    if (isvalid === false) {
      history("/");
    } else {
      setData(form);
      console.log(data);
      history("/dashboard");
    }
  };
  return (
    <Logins>
      <div className="div00">
        <label className="labels">LogIn</label>
      </div>
      <div className="div0">
        {" "}
        <label className="label0">UserName</label>
      </div>
      <div className="div1">
        {" "}
        <input
          className="label1"
          type="text"
          onChange={(e) => setMail(e.target.value)}
        />
      </div>
      <div className="div2">
        {" "}
        <label className="label2">Password</label>
      </div>

      <input
        className="label3"
        type="text"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="div5">
        {" "}
        <button className="label4" type="button" onClick={() => clickData()}>
          Login
        </button>
      </div>
    </Logins>
  );
}

export default Login;
