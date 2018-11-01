import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { Icon } from '../src/index'

storiesOf('Icon', module)
  .add('Icon', () => (
    <Icon type='Cast' />
  ))
  .add('Icon + Size', () => (
    <Fragment>
      <Icon type='Map' size={64} />
      <Icon type='Map' size={32} />
      <Icon type='Map' size={16} />
    </Fragment>
  ))
