import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withDocs } from 'storybook-readme';
import { Button } from '../src/index'

const README = `
  # Button

  ### :smile: Usage
  
  \`\`\`js
  import { Button } from 'neprik-design-system';
  \`\`\`
  
  <!-- STORY -->
`;

storiesOf('Button', module)
  .add('with text', withDocs(README, () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  )))
  .add('with some emoji',  withDocs(README, () => (
    <Button onClick={action('clicked')}><span role='img' aria-label='so cool'>😀 😎 👍 💯</span></Button>
  )))
