import styled from "styled-components";
export const Nav = styled.div`
  height: 110px;
  width: 100%;
  background-color: "red";
  display: grid;
  grid-template-columns: 20% 60% 20%;

  .left {
    display: flex;
    justify-content: center;
  }

  .middle {
    display: flex;
    justify-content: center;
    height: 100px;
    place-self: center;
    gap: 100px;
  }
  .text1 {
    color: black;
    font-size: 20px;
    place-self: center;
  }
  .right {
    display: flex;
    justify-content: center;
  }
  .check {
    display: flex;
    justify-content: center;
  }
  .social {
    color: black;
    place-self: center;
  }
`;
