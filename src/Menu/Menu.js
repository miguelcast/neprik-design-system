// @flow
import React, { useState } from 'react'
import Item from './Item'
import * as horizontal from './Horizontal.theme'
import * as vertical from './Vertical.theme'

const alignMenu = { horizontal, vertical }

type Props = {
  logo?: string,
  align?: 'vertical' | 'horizontal',
  theme?: 'light' | 'dark',
  children: React.ChildrenArray<React.Element<typeof Item>>
};

const Menu = ({ logo, theme = 'dark', align = 'vertical', children }: Props) => {
  const [hover, setHover] = useState(false)
  const getChildrenByPosition = fn => {
    return React.Children.map(React.Children.toArray(children), fn)
  }

  const mouseOver = event => {
    setHover(event)
  }

  const Wrapper = alignMenu[align].Wrapper
  const Top = alignMenu[align].Top
  const Bottom = alignMenu[align].Bottom

  return (
    <Wrapper onMouseEnter={() => mouseOver(true)} onMouseLeave={() => mouseOver(false)} theme={theme}>
      <Top>
        {logo && (
          <div className='logoMenu'>
            <img src={logo} alt={logo} />
          </div>
        )}
        {getChildrenByPosition(
          child =>
            (
              child.props.bottom
                ? null
                : React.cloneElement(child, { hover, align, theme })
            )
        )}
      </Top>
      <Bottom>
        {getChildrenByPosition(
          child =>
            (
              child.props.bottom
                ? React.cloneElement(child, { hover, align, theme })
                : null
            )
        )}
      </Bottom>
    </Wrapper>
  )
}

Menu.displayName = 'Menu'
export default Menu
