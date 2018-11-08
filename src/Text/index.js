// @flow
import React, { memo, createElement } from 'react'
import styles from './style.css';

type Props = {
  tag?: string,
  children: Node,
};

const Text = ({ tag = 'p', children, ...rest }: Props) => {
  return createElement(tag, { ...rest, className: styles.text }, [...children])
}

export default memo(Text)
