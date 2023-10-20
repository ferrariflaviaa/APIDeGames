import styled, { createGlobalStyle, keyframes } from "styled-components";

interface ICustomOptionIcon {
  size: number;
}

export const CustomOptionIcon = styled.img<ICustomOptionIcon>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

export const GlobalStyles = createGlobalStyle`

  html{
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  
  body,input,textarea,button{
    font-family:'Poppins', sans-serif;
    font-weight: 400;
  }
  /* h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
  } */
  button{
    cursor: pointer;
  }
 
  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    background: var(--white);
    padding: 3rem;
    position: relative;
    border-radius: 0.24;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  input, html{
    font-family: 'Inter', sans-serif;
  }

  .img-modal{
    width: 400px;
    height: 400px;
    border-radius: 0.25rem;
  }

  .button-modal{
    cursor: pointer;
    border: 0;
    position: absolute;
    bottom: 91%;
    left: 85%;
    background: var(--background);
    color: var(--white);
    padding: 0.5rem;
    border-radius: 0.25rem;
    &:hover {
    filter: brightness(0.7);
  }
  }

`;

export const CustomContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BGCOLOR1};
`;

export const CustomContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  background-color: #fff;
  /* border-radius: 0.6rem; */
  /* -webkit-box-shadow: 0px 0px 26px -8px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 26px -8px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 26px -8px rgba(0, 0, 0, 0.25); */
`;

export const CustomContentList = styled(CustomContent)`
  padding: 1rem;
`;
export interface IPageContainer {
  width?: number;
}

const fadeIn = keyframes`
  from {
    /* transform: translateY(20%); */
    opacity: 0;
    /* height: 0%; */
  }
  to {
    /* transform: translateY(0); */
    opacity: 1;
    /* height: 100%; */
  }
`;

export const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 160px);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #eaeaea;
  animation: ${fadeIn} 0.43s ease-in;
  transition: 0.3s all;
`;
