import React from 'react'
import { storiesOf } from '@storybook/react'
import { Text } from '../src/index'

storiesOf('Text', module)
  .addWithJSX('with text', () => (
    <Text tag="h1">Main Title</Text>
  ))
