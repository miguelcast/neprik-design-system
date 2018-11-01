// @flow
import React from 'react'
import * as featherIcons from 'styled-icons/feather'

type Props = {
  type: $Keys<typeof featherIcons>,
  size?: number
};

function Icon({ type, size = 32 }: Props) {
  const IconFeather = featherIcons[type]
  return <IconFeather size={size} />
}

export default Icon
