import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  /* background-color: lightblue; */

  @media(min-width: 500px) {
    /* background-color: red; */
  }
`;

const Banner = styled.img`
    width: 100px;
    height: 100px;
`;

export { Wrapper, Banner};