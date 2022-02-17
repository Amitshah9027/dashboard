import styled from "styled-components";
export const Footers = styled.div`
  width: 100%;
  height: 150px;
  display: grid;
  grid-template-rows: 80% 20%;
  justify-content: center;

  .lower {
    height: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .upper {
    display: flex;
    justify-content: center;
  }
  .middle {
    display: grid;
    grid-template-columns: 20% 60% 20%;
    justify-content: center;
    height: 50px;
    width: 100%;
  }
  .fix {
    place-self: center;
    display: flex;
    gap: 100px;
    color: black;
    font-size: 20px;
  }
  .copy {
    place-self: center;
  }
`;
