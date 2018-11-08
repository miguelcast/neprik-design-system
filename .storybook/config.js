import React from 'react';
import { configure } from '@storybook/react';

import '../src/globalStyle.css';

// add global styles styled-components to all components in storybook
// addDecorator(story => <Fragment><Style />{story()}</Fragment>);

// add stories
function loadStories() {
  require('../stories/Background.story');
  require('../stories/Button.story');
  require('../stories/Icon.story');
  require('../stories/Input.story');
  require('../stories/Text.story');
}

configure(loadStories, module);
