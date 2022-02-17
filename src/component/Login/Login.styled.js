import styled from "styled-components";
export const Logins = styled.div`
  height: 800px;
  width: 100%;
  display: grid;
  grid-template-rows: 120px 40px 40px 40px 40px;
  justify-content: center;
  gap: 60px;

  .div00 {
    display: flex;
    justify-content: center;
  }
  .labels {
    place-self: end;
    font-size: 40px;
    font-family: "Outfit", sans-serif;
    font-weight: 800px;
    font-style: bold;
  }
  .div0 {
    display: flex;
    justify-content: start;
  }
  .label1 {
    place-self: center;
    font-size: 30px;
    font-family: "Outfit", sans-serif;
    font-weight: 800px;
    font-style: bold;
    border: none;
    border-bottom: 2px solid black;
    background-color: grey;
    opacity: 0.5;
    color: red;
  }
  .label0 {
    place-self: center;
    font-size: 30px;
    font-family: "Outfit", sans-serif;
    font-weight: 800px;
    font-style: bold;
  }
  .label2 {
    place-items: center;
    font-size: 30px;
    font-family: "Outfit", sans-serif;
    font-weight: 800px;
    font-style: bold;
  }
  .div1 {
    display: flex;
    justify-content: start;
  }
  .div2 {
    display: flex;
    justify-content: start;
  }
  .label3 {
    place-items: center;
    font-size: 30px;
    font-family: "Outfit", sans-serif;
    height: 40px;
    font-weight: 800px;
    font-style: bold;
    background-color: grey;
    color: red;
    opacity: 0.5;
    border: none;
    border-bottom: 2px solid black;
  }
  .div3 {
    display: flex;
    justify-content: start;
  }

  .div5 {
    display: flex;
    justify-content: center;
    width: auto;
    height: 30px;
  }
  .label4 {
    place-items: center;
    font-size: 20px;
    width: 200px;
    height: 50px;
    font-family: "Outfit", sans-serif;
    font-weight: 800px;
    font-style: bold;
    background-color: aquamarine;
  }
  .div4 {
    width: auto;
    height: 30px;
  }
`;
