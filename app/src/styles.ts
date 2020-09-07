import styled, { createGlobalStyle, keyframes } from "styled-components";

export const breakpoints = {
  sm: 20,
  md: 30,
  lg: 45,
  xl: 60
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[key]}em) { ${style} }`;
};


export const Global = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-align: center;
      color: #212529;
    }
  `;

export const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
`;
export const AppContainer = styled.div`
    width:60%;
    margin: 0 auto;
    ${mediaQueries("sm")`
      width: 100%;
    `};
    ${mediaQueries("md")`
     width: 60%;
    `};
  `;




export const Grid = styled.div`
    display: grid;
    padding: 16px;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
    ${mediaQueries("sm")`
    grid-template-columns: 1fr;
    `};
    ${mediaQueries("md")`
    grid-template-columns: 1fr 1fr 1fr;
    `};
  `;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  border: 1px solid #dedede;
  border-radius: 5px;
  cursor:pointer;
  overflow: hidden;
  `;


export const ComicWrapper = styled.div`

width: 100%;
height: 100vh;
margin: 20px 0;
text-align: center;
`;

export const loadingAnimation = keyframes`
    0% {
      background-color: #fff;
    }
    50% {
      background-color: #ccc;
    }
    100% {
      background-color: #fff;
    }
  `;

export const Placeholder = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    animation: ${loadingAnimation} 1s infinite;
  `;

export const StyledImage = styled.img`
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: none;
  `;

export const ComicImage = styled.img`
  margin-bottom: 5px; 
`;

export const Button = styled.button`
    background: #17a2b8;
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #17a2b8;
    border-radius: 3px;
    cursor: pointer;
  `;