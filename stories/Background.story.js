import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { Background } from '../src/index'

const README = `
  # Background

  ### :smile: Usage
  
  \`\`\`js
  import { Background } from 'neprik-design-system';
  \`\`\`
  
  <!-- STORY -->
`;

storiesOf('Background', module)
  .add('with text', () => (
    <Background url="/back.jpeg">
      <img style={{ margin: '1rem' }} src="/white-logo.png" alt='Neprik' />
    </Background>
  ))
  .add('with text + position', () => (
    <Background url="/back.jpeg" x='center' y='bottom'>
      <img style={{ margin: '1rem' }} src="/white-logo.png" alt='Neprik' />
    </Background>
  ))
  .add('with text + position + size', withDocs(README, () => (
    <Background url="/back.jpeg" x='center' y='center' height='200px' width='200px'>
      <img style={{ margin: '1rem', width: 100 }} src="/white-logo.png" alt='Neprik' />
    </Background>
  )))
