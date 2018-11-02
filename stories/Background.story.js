import React from 'react'
import { storiesOf } from '@storybook/react'
import { Background } from '../src/index'

storiesOf('Background', module)
  .add('with text', () => (
    <Background>
      <span style={{ backgroundColor: 'red' }}>HELLO WORLD!!!</span>
    </Background>
  ))
  .add('with text + position', () => (
    <Background x='center' y='bottom'>
      <span style={{ backgroundColor: 'red' }}>HELLO WORLD!!!</span>
    </Background>
  ))
  .add('with text + position + size', () => (
    <Background x='center' y='center' height='200px' width='200px'>
      <span style={{ backgroundColor: 'red' }}>HELLO WORLD!!!</span>
    </Background>
  ))
