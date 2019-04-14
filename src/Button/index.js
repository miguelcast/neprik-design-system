// @flow
import React, { memo } from 'react'
import styled, { css } from 'styled-components'

type Props = {
  onClick: () => void,
  size: 's' | 'm' | 'l' | 'xl',
  children: Node,
};

const sizes = {
  s: css`
    font-size: 12px;
    padding: 6px 8px;
  `,
  m: css`
    font-size: 14px;
    padding: 8px 10px;
  `,
  l: css`
    font-size: 16px;
    padding: 12px 16px;
  `,
  xl: css`
    font-size: 20px;
    padding: 15px 30px;
  `
}

const Button = memo(({ onClick, size = 'l', children, ...rest }: Props) => {
  return (
    <ButtonStyled {...rest} onClick={onClick} size={size}>
      {children}
    </ButtonStyled>
  )
})

const ButtonStyled = styled.button`
  cursor: pointer;
  border-radius: 5px;
  border: 0;
  background-image: linear-gradient(to right, #ff9657, #ff865a, #ff765f, #ff6567, #ff5471);
  color: white;
  transition: box-shadow 0.3s ease-in-out;
  ${({ size }) => sizes[size]}
  
  &:hover {
    box-shadow: rgba(0,0,0,.12) 0 3px 13px 1px;
  }
`

Button.displayName = 'Button'

export default Button
