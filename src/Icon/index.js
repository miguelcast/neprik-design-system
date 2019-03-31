// @flow
import React, { memo } from 'react'
import * as icons from 'styled-icons/feather'

const featherIcons = icons

type Props = {
  type: $Keys<typeof featherIcons>,
  size?: number
};

const Icon = memo(({ type, size = 32 }: Props) => {
  const IconFeather = featherIcons[type]
  return <i><IconFeather size={size} /></i>
})

export default Icon
