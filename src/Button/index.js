// @flow
import React, { memo } from 'react'
import styles from './style.css'

type Props = {
  onClick: () => void,
  children: Node,
};

const Button = memo(({ onClick, children }: Props) => {
  return (
    <button className={styles.buttonPrimary} onClick={onClick}>
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
