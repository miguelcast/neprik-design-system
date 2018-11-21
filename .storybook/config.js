import React from 'react';
import { configure, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

import '../src/globalStyle.css';

setAddon(JSXAddon);

// add global styles styled-components to all components in storybook
// addDecorator(story => <Fragment><Style />{story()}</Fragment>);

// add stories
function loadStories() {
  require('./welcomeStory');
  require('../stories/Background.story');
  require('../stories/Button.story');
  require('../stories/Icon.story');
  require('../stories/Input.story');
  require('../stories/Text.story');
}

configure(loadStories, module);
