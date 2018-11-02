import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from '../src/index'

storiesOf('Input', module)
  .add('Input', () => (
    <Input onChange={value => action('onChange', value)} />
  ))
  .add('Input + Placeholder', () => (
    <Input placeholder='Name' onChange={value => action('onChange', value)} />
  ))
  .add('Input + Placeholder + Label', () => (
    <Input placeholder='Name' label='Name' onChange={value => action('onChange', value)} />
  ))
  .add('Input + Placeholder + Label + Icon', () => (
    <Input placeholder='Name' label='Name' icon='Lock' onChange={value => action('onChange', value)} />
  ))
  .add('Input + Placeholder + Error', () => (
    <Input placeholder='Name' label='Name' error='El campo es requerido' onChange={value => action('onChange', value)} />
  ))
