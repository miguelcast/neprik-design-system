// @flow
import React, { memo, createElement } from 'react'

type Props = {
  tag?: string,
  text: string
};

const textStyle = {
  textAlign: 'center',
  color: '#2C384B',
  fontWeight: '400',
  fontFamily: "'Lato', sans-serif"
}

const Text = memo(({ tag = 'p', text, ...rest }: Props) => {
  return createElement(tag, { ...rest, style: textStyle }, text)
})

Text.displayName = 'Text'

export default Text
