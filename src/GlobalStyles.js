import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Lato:300,400,700");
  
  html, body {
      height: 100%;
  }
  
  body, *, *:before, *:after {
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      letter-spacing: 1px;
      box-sizing: border-box;
  }
  
  body {
      padding: 0;
      margin: 0;
  }
  
  #__next {
      height: 100%
  }
`
