import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'
import { Icon } from '../src/index'

const README = `
  # Icon

  ### :smile: Usage
  
  \`\`\`js
  import { Icon } from 'neprik-design-system';
  \`\`\`
  
  <!-- STORY -->
`;

storiesOf('Icon', module)
  .add('Icon', withDocs(README, () => (
    <Icon type='Cast' />
  )))
  .add('Icon + Size', withDocs(README, () => (
    <Fragment>
      <Icon type='Map' size={64} />
      <Icon type='Map' size={32} />
      <Icon type='Map' size={16} />
    </Fragment>
  )))
