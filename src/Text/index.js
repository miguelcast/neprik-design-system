// @flow
import React, { memo, createElement } from 'react'
import styles from './style.css';

type Props = {
  tag?: string,
  children: Node,
};

const Text = memo(({ tag = 'p', children, ...rest }: Props) => {
  return createElement(tag, { ...rest, className: styles.text }, [...children])
})

Text.displayName = 'Text'

export default Text
