// @flow
import React from 'react'
import styled from 'styled-components'

type Props = {
  url: string,
  width?: string,
  height?: string,
  x?: 'left' | 'center' | 'right',
  y?: 'top' | 'center' | 'bottom',
  children: Node
};

function Background({ url, width, height, x = 'left', y = 'top', children }: Props) {
  return (
    <Wrapper width={width} height={height}>
      <BackStyled url={url} justify={positions.x(x)} alignItems={positions.y(y)}>
        {children}
      </BackStyled>
    </Wrapper>
  )
}

const positions = {
  y: type => {
    switch (type) {
      case 'bottom': {
        return 'flex-end'
      }
      case 'center': {
        return 'center'
      }
      case 'top':
      default: {
        return 'flex-start'
      }
    }
  },
  x: type => {
    switch (type) {
      case 'right': {
        return 'flex-end'
      }
      case 'center': {
        return 'center'
      }
      case 'left':
      default: {
        return 'flex-start'
      }
    }
  }
}

const Wrapper = styled.div`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  position: relative;
`

const BackStyled = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  
  background-image: url(${({ url }) => url});
  background-position: center;
  background-repeat: no-repeat;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignItems }) => alignItems};
`

Background.displayName = 'Background'

export default Background
