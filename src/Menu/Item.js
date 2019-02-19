// @flow
import React from 'react'
import Tooltip from 'react-tooltip-lite'
import styled from 'styled-components'
import Icon from '../Icon'

type Props = {
  text?: string,
  icon?: string,
  Component?: React.ReactElement,
  bottom?: boolean,
};

const Item = ({ text, icon, Component }: Props) => {
  return <TooltipStyled content={text} direction='right' className='target'>
    <WrapperItem>{icon && <Icon type={icon} />}{Component || null}</WrapperItem>
  </TooltipStyled>
}

const TooltipStyled = styled(Tooltip)`
  .react-tooltip-lite {
    border-radius: 5px;
    background: #333;
    color: white;
  }
  .react-tooltip-lite a {
    color: #86b0f4;
    text-decoration: none;
  }
  .react-tooltip-lite a:hover {
    color: #4286f4;
  }
  .react-tooltip-lite-arrow {
    border-color: #333;
  }
`

const WrapperItem = styled.div`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`

Item.displayName = 'Item'
export default Item
