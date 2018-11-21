import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from '../src/index'

storiesOf('Button', module)
  .addWithJSX('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .addWithJSX('with some emoji', () => (
    <Button onClick={action('clicked')}><span role='img' aria-label='so cool'>😀 😎 👍 💯</span></Button>
  ))
