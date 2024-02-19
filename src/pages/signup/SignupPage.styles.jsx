import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 428px;
  height: 100vh;
  background-color: #fff;
  margin: 0 auto;

  button {
    width: 365px;
    height: 51px;
    font-family: "Noto Sans", sans-serif;
    line-height: 24px;
    font-weight: 700;
    font-size: 18px;
    color: #ffff;
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
  }

  @media (min-width: 429px) {
    width: 100vw;
    height: 100vh;

    button {
      &.button-primary {
        width: 35vw;
      }
    }

    Header {
      width: 70vw;
      padding: 0 auto;

      img {
        display: none;
      }
    }
  }

  @media (max-width: 420px) {
    width: 375px;
    height: auto;
    display: flex;
    align-items: center;

    Header {
      display: flex;
      justify-content: center;
      gap:10px;
      width: 100vw;
      padding: 0 auto;
    }
    button{
      width: 50vw;
    }
  }
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 364px;
  height: 86px;
  padding: 29px 32px 150px 32px;

  position: relative;
  top: 35px;

  h1 {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 700;
    font-size: 33px;
    line-height: 42px;
  }

  img {
    display: none;
  }

  @media (min-width: 429px) {
    width: auto;
    height: 20%;
    display: flex;
    align-items: center;
    img {
      display: initial;
    }
  }

  @media (max-width: 420px) {
    width: 350px;
    height: 80px;
    padding-bottom: 70px;


  

    h1 {
      margin: 0;
      font-family: "IBM Plex Sans", sans-serif;
      font-weight: 700;
      font-size: 30px;
      line-height: 42px;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  line-height: 2;

  @media (max-width: 420px) {
    width: auto;
    display: flex;
    align-items: center;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 0px 39px 40px 26px;

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

    @media (min-width: 699px) {
      height: 60px;
    }
   @media (max-width: 420px) {
      width: 80vw;
      margin: 0 auto;
      background-color: #ffffff;
    }
 
  }
`;
export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin: 0px 32px 29px 32px;

  h2 {
    max-width: 100%;
    height: 38px;

    font-family: "Noto Sans", sans-serif;
    font-weight: 500;
    font-size: 14px;
  }

  label {
    display: flex;
    gap: 10px;

    font-family: "Noto Sans", sans-serif;
    font-weight: 400;
    font-size: 14px;
  }

  a {
    text-decoration: none;
    font-family: "Noto Sans", sans-serif;
    font-weight: 500;
    color: #4088cb;
    font-size: 14px;
  }

  @media (min-width: 429px) {
    width: auto;
    display: flex;
    align-items: center;

    
  }


  
  @media (max-width: 420px) {
    width: 350px;
    height: 60px;
    align-items: center;
    gap: 20px;
    padding-bottom: 70px;
  


  

  }
`;
