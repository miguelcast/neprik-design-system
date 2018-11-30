import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setOptions, withOptions } from '@storybook/addon-options';

import '../src/globalStyle.css';

addDecorator(
  withOptions({
    name: 'Neprik Design System',
    url: '#',
  })
);

setOptions({
  theme: {
    mainTextColor: '#ff5471',
    mainTextFace: 'Lato',
    mainFill: '#ffffff',
    barFill: '#e2e2e2',
    mainBackground: '#f3f3f3',
    mainBorder: '1px solid #e2e2e2',
    mainBorderRadius: 5,
    layoutMargin: 10,
  }
});
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
