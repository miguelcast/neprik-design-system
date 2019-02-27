import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { Avatar } from '../src/index'

const README = `
  # Button

  ### :smile: Usage
  
  \`\`\`js
  import { Avatar } from 'neprik-design-system';
  \`\`\`
  
  <!-- STORY -->
`

storiesOf('Avatar', module)
  .add('with icon', withDocs(README, () => (
    <Avatar icon='User' />
  )))
