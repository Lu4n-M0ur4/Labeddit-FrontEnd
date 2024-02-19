import styled from "styled-components";
// font-family: 'IBM Plex Sans', sans-serif;
// font-family: 'Noto Sans', sans-serif;
export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 428px;
  height: 926px;
  background-color: #fff;
  margin: 0 auto;

  img {
    padding: 133px 134px 0;
  }

  p {
    width: 378px;
    height: 21px;
    display: flex;
    font-family: "IBM Plex Sans", sans-serif;
    justify-content: center;
    padding-bottom: 107px;

    margin: 0px;
  }
  @media (min-width: 429px) {
    width: 100vw;
    height: 100vh;
    img {
      min-width: 250px;
    }
  }
  @media (max-width: 376px) {
    width: 375px;
    height: auto;
    display: flex;
    align-items: center;

    Header {
      display: flex;
      justify-content: space-around;
      width: 100vw;
      padding: 0 auto;
    }

    img{
      padding-top:20px;
    }
  
  }
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  line-height: 21x;

  @media (max-width: 376px) {
    width: auto;
    display: flex;
    align-items: center;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 0px 39px 65px 26px;

  input {
    width: 363px;
    height: 60px;
    border: 1px solid;
    border-color: #d5d8de;
    border-radius: 4px;

    &::placeholder {
      font-family: "Noto Sans", sans-serif;
      padding-left: 16px;
      opacity: 80%;
      font-weight: 400;
      font-size: 16px;
    }
    
    @media (max-width: 376px) {
      width: 80vw;
      margin: 0 auto;
      background-color: #ffffff;
    }
  }


`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0px 39px 65px 26px;

  @media (max-width: 376px) {
padding-bottom: 10px;
    
  }

  button {
    width: 365px;
    height: 51px;
    font-family: "Noto Sans", sans-serif;
    line-height: 24px;
    font-weight: 700;
    color: #ffff;
    font-size: 18px;
    border: 1px solid;
    border-color: #d5d8de;
    border-radius: 27px;
    background: linear-gradient(
      90deg,
      rgba(255, 100, 137, 1) 0%,
      rgba(249, 178, 78, 1) 100%
    );

    &.button-secondary {
      background: #fff;
      border: 1px solid;
      border-color: #fe7e02;
      color: #fe7e02;
    }

    @media (max-width: 376px) {
      align-self: center;
      width: 50vw;
    
  }
  }

  

`;
export const GradientHR = styled.div`
  width: 364px;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(255, 100, 137, 1) 0%,
    rgba(249, 178, 78, 1) 100%
  );

  @media (max-width: 376px) {
      align-self: center;
      width: 100%;
    
  }
`;
