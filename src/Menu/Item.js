// @flow
import React from 'react'
import Icon from '../Icon'
import * as horizontal from './Horizontal.theme'
import * as vertical from './Vertical.theme'

const alignMenu = { horizontal, vertical }

type Props = {
  align?: 'vertical' | 'horizontal',
  text?: string,
  icon?: string,
  hover?: boolean,
  Component?: React.ReactElement,
  bottom?: boolean,
  hoverStyle?: boolean,
  theme?: 'light' | 'dark',
};

const Item = ({ align = 'vertical', text = '', theme = 'dark', icon, hover, hoverStyle = true, Component }: Props) => {
  const WrapperItem = alignMenu[align].WrapperItem
  return (
    <WrapperItem hover={(hover && hoverStyle)} haveText={!!text || align === 'horizontal'}>
      {icon && <Icon type={icon} size={26} />}{Component || null}
      <span>{(hover || align === 'horizontal') ? text : null}</span>
    </WrapperItem>
  )
}

Item.displayName = 'Item'
export default Item
