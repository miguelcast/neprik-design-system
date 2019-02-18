import React from 'react'
import { storiesOf } from '@storybook/react'
import { Menu } from '../src/index'

storiesOf('Menu', module)
  .add('Menu', () => (
    <Menu logo='/logo.png' />
  ))
