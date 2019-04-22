import React from 'react';
import { configure, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

import '!style-loader!css-loader!../src/globalStyle.css';

addParameters({
  options: {
    name: 'Neprik Design System',
    url: '#',
    theme: {
      ...themes.dark,
      fontBase: 'Lato',
      colorPrimary: '#ff5471',
      appContentBg: 'white',
      brandTitle: 'Neprik Design System',
      brandUrl: '/logo.png',
    },
  },
});

// add stories
function loadStories() {
  require('./welcomeStory');
  require('../stories/Avatar.story');
  require('../stories/Background.story');
  require('../stories/Button.story');
  require('../stories/Icon.story');
  require('../stories/Input.story');
  require('../stories/Menu.story');
  require('../stories/Schedule.story');
  require('../stories/Text.story');
}

configure(loadStories, module);
