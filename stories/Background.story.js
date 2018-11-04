import React from 'react'
import { storiesOf } from '@storybook/react'
import { Background } from '../src/index'
import backImage from './back.jpeg'
import whiteLogo from './white-logo.png'

storiesOf('Background', module)
  .add('with text', () => (
    <Background url={backImage}>
      <img style={{ margin: '1rem' }} src={whiteLogo} alt='Neprik' />
    </Background>
  ))
  .add('with text + position', () => (
    <Background url={backImage} x='center' y='bottom'>
      <img style={{ margin: '1rem' }} src={whiteLogo} alt='Neprik' />
    </Background>
  ))
  .add('with text + position + size', () => (
    <Background url={backImage} x='center' y='center' height='200px' width='200px'>
      <img style={{ margin: '1rem', width: 100 }} src={whiteLogo} alt='Neprik' />
    </Background>
  ))
