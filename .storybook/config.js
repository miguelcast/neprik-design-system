import React, { Fragment } from 'react';
import { configure, addDecorator } from '@storybook/react';

import Style from '../src/globalStyle';

// add global styles styled-components to all components in storybook
addDecorator(story => <Fragment><Style />{story()}</Fragment>);

// add stories
function loadStories() {
  require('../stories/Background.story');
  require('../stories/Button.story');
  require('../stories/Icon.story');
  require('../stories/Input.story');
  require('../stories/Title.story');
}

configure(loadStories, module);
