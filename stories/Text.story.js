import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { Text } from '../src/index'

const README = `
  # Text

  ### :smile: Usage
  
  \`\`\`js
  import { Text } from 'neprik-design-system';
  \`\`\`
  
  <!-- STORY -->
`;

storiesOf('Text', module)
  .add('with text', withDocs(README, () => (
    <Text tag="h1">Main Title</Text>
  )))
