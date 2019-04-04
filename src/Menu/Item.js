// @flow
import React from 'react'
import Icon from '../Icon'
import * as horizontal from './Horizontal.theme'
import * as vertical from './Vertical.theme'

const alignMenu = { horizontal, vertical };

type Props = {
  align?: 'vertical' | 'horizontal',
  text?: string,
  icon?: string,
  hover?: boolean,
  Component?: React.ReactElement,
  bottom?: boolean,
};

const Item = ({ align = 'vertical', text = "", icon, hover, Component }: Props) => {
  const WrapperItem = alignMenu[align].WrapperItem;
  return (
    <WrapperItem hover={hover} haveText={!!text || align === 'horizontal'}>
      {icon && <Icon type={icon}/>}{Component || null}
      <span>{(hover || align === 'horizontal') ? text : null}</span>
    </WrapperItem>
  );
};

Item.displayName = 'Item';
export default Item
