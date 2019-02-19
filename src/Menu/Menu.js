// @flow
import React from 'react'
import Item from './Item'
import styled from 'styled-components'

type Props = {
  logo?: string,
  children: React.ChildrenArray<React.Element<typeof Item>>
};

const Menu = ({ logo, children }: Props) => {
  const getChildrenByPosition = fn => {
    return React.Children.map(React.Children.toArray(children), fn)
  }

  return (
    <Wrapper>
      <Top>
        {logo && <img src={logo} alt={logo} />}
        {getChildrenByPosition(child => (child.props.bottom ? null : child))}
      </Top>
      <Bottom>
        {getChildrenByPosition(child => (child.props.bottom ? child : null))}
      </Bottom>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  left: 0;
  width: 80px;
  height: 100%;
  padding-top: 20px;
  background-color: #2c384b;
  color: white;
`

const Top = styled.div`
  width: 100%;
  text-align: center;
  
  & > img:first-child {
    margin-bottom: 5px;
  }
`

const Bottom = styled.div`
  width: 100%;
  text-align: center;
`

Menu.displayName = 'Menu'
export default Menu
