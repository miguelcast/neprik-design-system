// @flow
import React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  width?: string,
  height?: string,
  x?: 'left' | 'center' | 'right',
  y?: 'top' | 'center' | 'bottom',
  children: Node
};

function Background({ width, height, x = 'left', y = 'top', children }: Props) {
  return (
    <Back width={width} height={height} x={x} y={y}>
      {children}
    </Back>
  )
}

const positions = {
  y: type => {
    switch (type) {
      case 'bottom': {
        return css`
          align-items: flex-end;
        `
      }
      case 'center': {
        return css`
          align-items: center;
        `
      }
      case 'top':
      default: {
        return css`
          align-items: flex-start;
        `
      }
    }
  },
  x: type => {
    switch (type) {
      case 'right': {
        return css`
          justify-content: flex-end;
        `
      }
      case 'center': {
        return css`
          justify-content: center;
        `
      }
      case 'left':
      default: {
        return css`
          justify-content: flex-start;
        `
      }
    }
  }
}

const Back = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : '100%'};
  display: flex;
  ${props => positions.x(props.x)};
  ${props => positions.y(props.y)};
  background: url("https://picsum.photos/1200") no-repeat center;
  background-size: cover;
`

export default Background
