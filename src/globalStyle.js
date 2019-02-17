import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Lato:300,400,700");
  
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
`
