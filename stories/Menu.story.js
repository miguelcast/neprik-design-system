import React from 'react'
import { storiesOf } from '@storybook/react'
import { Menu, Item } from '../src/Menu'
import Avatar from '../src/Avatar'

storiesOf('Menu', module)
  .add('Menu + Align horizontal', () => (
    <Menu logo='/logo.png' align='horizontal' theme='light'>
      <Item icon='Layers' text='Servicios' />
      <Item icon='Inbox' text='Contacto' bottom />
      <Item icon='Settings' text='Configuración' bottom />
      <Item hoverStyle={false} Component={<Avatar icon='User' />} bottom />
    </Menu>
  ))
  .add('Menu + Align vertical', () => (
    <Menu logo='/logo.png' align='vertical'>
      <Item icon='Layers' text='Servicios' />
      <Item icon='Inbox' text='Contacto' bottom />
      <Item icon='Settings' text='Configuración' bottom />
      <Item hoverStyle={false} Component={<Avatar icon='User' />} bottom />
    </Menu>
  ))
  .add('Menu + Theme dark or light', () => (
    <div style={{ width: '100%', height: '100%' }}>
      <Menu logo='/logo.png' align='horizontal' theme='light'>
        <Item icon='Layers' text='Servicios' />
        <Item icon='Inbox' text='Contacto' bottom />
        <Item icon='Settings' text='Configuración' bottom />
        <Item hoverStyle={false} Component={<Avatar icon='User' />} bottom />
      </Menu>
      <Menu logo='/logo.png' align='horizontal'>
        <Item icon='Layers' text='Servicios' />
        <Item icon='Inbox' text='Contacto' bottom />
        <Item icon='Settings' text='Configuración' bottom />
        <Item hoverStyle={false} Component={<Avatar icon='User' />} bottom />
      </Menu>
    </div>
  ))
