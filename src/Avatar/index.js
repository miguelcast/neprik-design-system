// @flow
import React, { memo } from 'react'
import styled from 'styled-components'
import * as icons from 'styled-icons/feather'
import Icon from '../Icon'

const featherIcons = icons

type Props = {
  image: string,
  icon: $Keys<typeof featherIcons>,
  size?: number
}

const Avatar = memo(({ icon, image, size = 30 }: Props) => {
  return (
    <AvatarStyled size={size}>
      {icon && (
        <Icon type={icon} size={size - 10} />
      )}
      {image && (
        <Image url={image} rol='image' />
      )}
    </AvatarStyled>
  )
})

const AvatarStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px hsla(0,0%,0%,0.1);
  background-color: white;
  color: #2C384B;
`

const Image = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px hsla(0,0%,0%,0.1);
  background-size: cover;
  
  background-image: url(${({ url }) => url});
  background-position: center;
  background-repeat: no-repeat;
  justify-content: center;
  align-items:center;
`

Avatar.displayName = 'Avatar'

export default Avatar
