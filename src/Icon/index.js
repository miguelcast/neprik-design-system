// @flow
import React from 'react'
import { Lock } from 'styled-icons/feather/Lock.cjs'
import { Cast } from 'styled-icons/feather/Cast.cjs'
import { Map } from 'styled-icons/feather/Map.cjs'
import { User } from 'styled-icons/feather/User.cjs'

const featherIcons = {
  Lock,
  Cast,
  Map,
  User
};

type Props = {
  type: $Keys<typeof featherIcons>,
  size?: number
};

function Icon({ type, size = 32 }: Props) {
  const IconFeather = featherIcons[type]
  return <IconFeather size={size} />
}

export default Icon
