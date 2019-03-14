// @flow
import React, { memo } from 'react'
import styled from 'styled-components'
import Icon from '../Icon'

type Props = {
  icon?: string
}

const Avatar = memo(({ icon }: Props) => {
  return (
    <AvatarStyled>
      {icon && (
        <Icon type={icon} size={32} />
      )}
    </AvatarStyled>
  )
})

const AvatarStyled = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  border: 1px solid lightcoral;
  background-color: white;
  color: #2C384B;
`

Avatar.displayName = 'Avatar'

export default Avatar