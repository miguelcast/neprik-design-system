import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withDocs } from 'storybook-readme'
import { Button } from '../src/index'

const README = `
  # Button

  ### :smile: Usage
  
  \`\`\`js
  import { Button } from 'neprik-design-system';
  \`\`\`
  
  <!-- STORY -->
`

storiesOf('Button', module)
  .add('with text', withDocs(README, () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  )))
  .add('with some emoji', withDocs(README, () => (
    <Button onClick={action('clicked')}><span role='img' aria-label='so cool'>😀 😎 👍 💯</span></Button>
  )))
  .add('with sizes', withDocs(README, () => (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '500px' }}>
      <div>
        <Button onClick={action('clicked')} size='xl'>Size xl</Button>
      </div>
      <div>
        <Button onClick={action('clicked')} size='l'>Size l</Button>
      </div>
      <div>
        <Button onClick={action('clicked')} size='m'>Size m</Button>
      </div>
      <div>
        <Button onClick={action('clicked')} size='s'>Size s</Button>
      </div>
    </div>
  )))
