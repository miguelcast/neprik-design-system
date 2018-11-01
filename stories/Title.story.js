import React from 'react'
import { storiesOf } from '@storybook/react'
import { Title } from '../src/index'

storiesOf('Title', module)
  .add('with text', () => (
    <Title>Main Title</Title>
  ))
