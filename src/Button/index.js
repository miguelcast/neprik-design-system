// @flow
import React, { memo } from 'react'
import styled from 'styled-components'

type Props = {
  onClick: () => void,
  children: Node,
};

const Button = ({ onClick, children }: Props) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
}

const ButtonStyled = styled.button`
  height: 45px;
  width: 220px;
  cursor: pointer;
  border-radius: 5px;
  border: 0;
  background-image: linear-gradient(to right, #ff9657, #ff865a, #ff765f, #ff6567, #ff5471);
  
  color: white;
  font-size: 1.5rem;

  transition: box-shadow 0.3s ease-in-out;
  
  &:hover {
    box-shadow: rgba(0,0,0,.12) 0 3px 13px 1px;
  }
`

export default memo(Button)
