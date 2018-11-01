import React from 'react'
import { storiesOf } from '@storybook/react'
import { Input } from '../src/index'

storiesOf('Input', module)
  .add('Input', () => (
    <Input />
  ))
  .add('Input + Placeholder', () => (
    <Input placeholder='Name' />
  ))
  .add('Input + Placeholder + Label', () => (
    <Input placeholder='Name' label='Name' />
  ))
  .add('Input + Placeholder + Label + Icon', () => (
    <Input placeholder='Name' label='Name' icon='Lock' />
  ))
  .add('Input + Placeholder + Error', () => (
    <Input placeholder='Name' label='Name' error='El campo es requerido' />
  ))
