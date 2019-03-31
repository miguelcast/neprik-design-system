// @flow
import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'

type Props = {
  text?: string,
  icon?: string,
  hover?: boolean,
  Component?: React.ReactElement,
  bottom?: boolean,
};

const Item = ({ text = "", icon, hover, Component }: Props) => {
  return (
    <WrapperItem hover={hover} haveText={!!text}>
      {icon && <Icon type={icon}/>}{Component || null}
      <span>{hover ? text : null}</span>
    </WrapperItem>
  );
};

const WrapperItem = styled.div`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  cursor: pointer;
  text-align: ${({ hover, haveText }) => hover && haveText ? 'left' : 'center'};
  padding-left: ${({ hover, haveText }) => hover && haveText ? '12px' : '0'};
  & > i {
    padding-right: ${({ hover }) => hover ? '8px' : '0'};
    opacity: ${({ hover, haveText }) => hover && haveText ? '0.6' : '1'};
  }
  & > span {
    transition: opacity 600ms ease-out;
    transition-delay: 300ms;
    opacity: ${({ hover }) => hover ? '1' : '0'};
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

Item.displayName = 'Item';
export default Item
