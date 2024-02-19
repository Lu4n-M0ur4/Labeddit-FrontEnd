import styled from "styled-components";

export const HeaderPage = styled.header`
  width: 364px;
  height: 50px;
  position: fixed;
  z-index: 10;
  padding: 0px 32px;
  background-color: #ededed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: "Noto Sans", sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #4088cb;
    
  }

  img {
    width: 25px;
    height: 25px;
    padding: 0px;
  }
`;
