import React from 'react'
import { storiesOf } from '@storybook/react'
import { Background } from '../src/index'

storiesOf('Background', module)
  .add('with text', () => (
    <Background url="/back.jpeg">
      <img style={{ margin: '1rem' }} src="/white-logo.png" alt='Neprik' />
    </Background>
  ))
  .add('with text + position', () => (
    <Background url="/back.jpeg" x='center' y='bottom'>
      <img style={{ margin: '1rem' }} src="/white-logo.png" alt='Neprik' />
    </Background>
  ))
  .add('with text + position + size', () => (
    <Background url="/back.jpeg" x='center' y='center' height='200px' width='200px'>
      <img style={{ margin: '1rem', width: 100 }} src="/white-logo.png" alt='Neprik' />
    </Background>
  ))
