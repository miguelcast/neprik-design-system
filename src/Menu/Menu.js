// @flow
import React, { useState } from 'react'
import Item from './Item'
import { Wrapper, Bottom, Top } from './Horizontal.theme'

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

Menu.displayName = 'Menu'
export default Menu
