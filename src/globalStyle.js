import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lato');
  
  body, *, *:before, *:after {
    font-family: 'Lato', sans-serif;
    font-weight: 200;
  }
`;
