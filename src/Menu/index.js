// @flow
import React from 'react'
import styled from 'styled-components'

type Props = {
  logo?: string,
}

const Menu = ({ logo }: Props) => {
  return (
    <Wrapper>
      {logo && (
        <img src={logo} alt={logo} />
      )}
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
  background-color: #2C384B;
  color: white;
`

Menu.displayName = 'Menu'
export default Menu
