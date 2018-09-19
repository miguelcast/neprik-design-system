import React from 'react';
import styled from 'styled-components';

const Button = ({ children, ...rest }) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>
};

const ButtonStyled = styled.button`
  cursor: pointer;
  border-radius: 5px;
  border: 0;
  height: 45px;
  width: 220px;
  background-image: linear-gradient(to right, #ff9657, #ff865a, #ff765f, #ff6567, #ff5471);
  
  color: white;
  font-size: 24px;
  letter-spacing: 0.5px;
`;

export default Button;
