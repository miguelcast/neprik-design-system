// @flow
import React, { memo } from 'react'
import styled from 'styled-components'

type Props = {
  Tag?: string,
  children: Node,
};

const Title = ({ Tag = 'h1', children }: Props) => {
  const TitleStyled = styled[Tag]`
    text-align: center;
    color: #2C384B;
    font-weight: 400;
  `

  return <TitleStyled>{children}</TitleStyled>
}

export default memo(Title)
