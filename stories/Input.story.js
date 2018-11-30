import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withDocs } from 'storybook-readme'
import { Input } from '../src/index'

const README = `
  # Input

  ### :smile: Usage
  
  \`\`\`js
  import { Input } from 'neprik-design-system';
  \`\`\`
  
  <!-- STORY -->
`;

storiesOf('Input', module)
  .add('Input', withDocs(README, () => (
    <Input onChange={value => action('onChange', value)} />
  )))
  .add('Input + Placeholder', withDocs(README, () => (
    <Input placeholder='Name' onChange={value => action('onChange', value)} />
  )))
  .add('Input + Placeholder + Label', withDocs(README, () => (
    <Input placeholder='Name' label='Name' onChange={value => action('onChange', value)} />
  )))
  .add('Input + Placeholder + Label + Icon', withDocs(README, () => (
    <Input placeholder='Name' label='Name' icon='Lock' onChange={value => action('onChange', value)} />
  )))
  .add('Input + Placeholder + Error', withDocs(README, () => (
    <Input placeholder='Name' label='Name' error='El campo es requerido' onChange={value => action('onChange', value)} />
  )))
