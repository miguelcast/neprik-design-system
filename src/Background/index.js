// @flow
import React from 'react'
import styles from './style.css';

type Props = {
  url: string,
  width?: string,
  height?: string,
  x?: 'left' | 'center' | 'right',
  y?: 'top' | 'center' | 'bottom',
  children: Node
};

function Background({ url, width, height, x = 'left', y = 'top', children }: Props) {
  const relative = {
    width: width ? width : '100%',
    height: height ? height : '100%',
    position: 'relative'
  };

  const styleInline = {
    backgroundImage: `url(${url})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    justifyContent: positions.x(x),
    alignItems: positions.y(y)
  }

  return (
    <div style={relative}>
      <div style={styleInline} className={styles.back}>
        {children}
      </div>
    </div>
  )
}

const positions = {
  y: type => {
    switch (type) {
      case 'bottom': {
        return 'flex-end';
      }
      case 'center': {
        return 'center'
      }
      case 'top':
      default: {
        return 'flex-start'
      }
    }
  },
  x: type => {
    switch (type) {
      case 'right': {
        return 'flex-end'
      }
      case 'center': {
        return 'center'
      }
      case 'left':
      default: {
        return 'flex-start'
      }
    }
  }
}

export default Background
