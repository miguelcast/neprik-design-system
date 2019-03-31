// @flow
import React, { useState } from 'react'
import styled from 'styled-components'
import Item from './Item'

type Props = {
  logo?: string,
  children: React.ChildrenArray<React.Element<typeof Item>>
};

const Menu = ({ logo, children }: Props) => {
  const [hover, setHover] = useState(false);
  const getChildrenByPosition = fn => {
    return React.Children.map(React.Children.toArray(children), fn)
  }

  const mouseOver = event => {
    setHover(event);
  }

  return (
    <Wrapper onMouseEnter={() => mouseOver(true)} onMouseLeave={() => mouseOver(false)}>
      <Top>
        {logo && <img src={logo} alt={logo} />}
        {getChildrenByPosition(
          child =>
            (
              child.props.bottom
                ? null
                : React.cloneElement(child, { hover })
            )
        )}
      </Top>
      <Bottom>
        {getChildrenByPosition(
          child =>
            (
              child.props.bottom
                ? React.cloneElement(child, { hover })
                : null
            )
        )}
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
  transition: width 180ms ease-in-out;
  &:hover {
    width: 200px;
  }
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
