// @flow
import React, { memo } from 'react'
import { Lock } from 'styled-icons/feather/Lock.cjs'
import { Cast } from 'styled-icons/feather/Cast.cjs'
import { Map } from 'styled-icons/feather/Map.cjs'
import { User } from 'styled-icons/feather/User.cjs'
import { AtSign } from 'styled-icons/feather/AtSign.cjs'

const featherIcons = {
  Lock,
  Cast,
  Map,
  User,
  AtSign
};

type Props = {
  type: $Keys<typeof featherIcons>,
  size?: number
};

const Icon = memo(({ type, size = 32 }: Props) => {
  const IconFeather = featherIcons[type]
  return <IconFeather size={size} />
})

export default Icon
