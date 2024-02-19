import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 428px;
  height: 100%;
  background-color: #fff;
  margin: 0 auto;

  button {
    &.button-primary {
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
      cursor: pointer;
      background: linear-gradient(
        90deg,
        rgba(255, 100, 137, 1) 0%,
        rgba(249, 178, 78, 1) 100%
      );
    }

    &.button-secondary {
      background: #fff;
      border: 1px solid;
      border-color: #fe7e02;
      color: #fe7e02;
    }
  }


  @media (min-width: 699px) {
    width: 100vw;
    height: 100vh;

    button {
      &.button-primary {
        width: 35vw;
      }
    }

    Header{
      width: 55vw;
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  @media (max-width: 420px) {
    width: 375px;
    Header {
      justify-content: space-between;
      padding-left: 20px;
      padding-right: 20px;
    }

    button {
      &.button-primary {
        width: 60vw;
      }
    }
  }


`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  textarea {
    width: 347px;
    height: 113px;
    margin: 32px 32px 12px 32px;
    background-color: #ededed;
    
    font-family: 'IBM Plex Sans', sans-serif;
    opacity:80%;
    font-weight:400;
    font-size: 18px;

    padding-left: 17px;
    padding-top: 18px;

    border: none;
    border-radius: 12px;

    &::placeholder{
    font-family: 'IBM Plex Sans', sans-serif;
  
    opacity:80%;
    font-weight:400;
    font-size: 18px;
    }

  }

  @media (min-width: 699px) {
      textarea {
        width: 40vw;
        height: 200px;
      }
    }

`;
export const FixedContainer = styled.div`
position: relative;
top: 55px;
/* z-index: 4; */
max-width: 50vw;
display: flex;
flex-direction: column;
align-items: center;



`
export const GradientHR = styled.div`
  width: 364px;
  min-height: 1px;
  margin: 32px 35px 0 35px;
  background: linear-gradient(
    90deg,
    rgba(255, 100, 137, 1) 0%,
    rgba(249, 178, 78, 1) 100%
  );

  @media (min-width: 699px) {
    width: 80%;
  }
`;
export const CardsContainer = styled.div`
  width: 364px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 26px 31px 0px 26px;

  @media (min-width: 699px) {
    width: 40vw;
    height: auto;
  }
`;
export const Container = styled.div`
  min-width: 100%;
  height: 100%;
  gap: 18px;
  display: flex;
  flex-direction: column;

  border: solid 1px #e0e0e0;
  border-radius: 12px;
  background-color: #fbfbfb;

  p {
    width: auto;
    margin: 9px 0px 0px 10px;
    color: #6f6f6f;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    font-size: 12px;
  }

  h2 {
    word-wrap: break-word;
    width: 335px;
    font-size: 18px;
    margin: 0px 14px;

    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color:#000000;
  }

  h3 {
    margin: 0;
  }

  @media (min-width: 699px) {
    h2 {
  width: auto;
  }
  }
  
`;
export const SectionCommentsAndLikes = styled.section`
  width: 100%;
  height: 28px;
  display: flex;
  align-items: center;

  gap: 11px;
  margin-left: 10px;
  margin-bottom: 9px;

  button {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  p {
    margin: 0px;
    align-self: center;
  }
`
export const SectionLikes = styled.section`
  max-width: 98px;
  height: 27px;
  padding: 0px;
  display: flex;
  justify-content: center;
  gap: 13px;

  border: 0.8px solid #ececec;
  border-radius: 12px;

  button {
    border: none;
    background-color: #fbfbfb;
    border-radius: 14px;
  }

  h3 {
    align-self: center;
    color: #6f6f6f;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 700;
    font-size: 9px;
    line-height: 23px;
    align-self: center;
  }
`;
export const SectionComment = styled.section`
  min-width: 65px;
  min-height: 27px;
  margin-left: 0px;
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 0px;

  button {
    border: none;
    background-color: #fbfbfb;
    border: 0.8px solid #ececec;
    border-radius: 12px;
  }
  p {
    width: auto;
    margin: 0;
    color: #6f6f6f;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    font-size: 9px;
    line-height: 23px;
  }
`;
