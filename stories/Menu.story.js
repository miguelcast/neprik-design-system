import React from 'react'
import { storiesOf } from '@storybook/react'
import { Menu, Item } from '../src/Menu'

storiesOf('Menu', module)
  .add('Menu', () => (
    <Menu logo='/logo.png'>
      <Item icon='User' text='Servicios' />
      <Item icon='Inbox' text='Contacto' bottom />
      <Item icon='Settings' text='Configuración' bottom />
      <Item Component={<div>O</div>} text='Configuración' bottom />
    </Menu>
  ))
