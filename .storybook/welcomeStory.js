import React from 'react'
import { storiesOf } from '@storybook/react'
import Text from '../src/Text'

storiesOf('Welcome', module)
  .add('to design system 🖥', () => (
    <Text tag="h1">Welcome to Neprik Design System</Text>
  ))
