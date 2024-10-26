import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/styles/style.scss';
import React from 'react';

const customViewports = {
  sm: {
    name: 'Small (sm) - 640px',
    styles: {
      width: '640px',
      height: '100%',
    },
  },
  md: {
    name: 'Medium (md) - 768px',
    styles: {
      width: '768px',
      height: '100%',
    },
  },
  lg: {
    name: 'Large (lg) - 1024px',
    styles: {
      width: '1024px',
      height: '100%',
    },
  },
  xl: {
    name: 'Extra Large (xl) - 1280px',
    styles: {
      width: '1280px',
      height: '100%',
    },
  },
  '2xl': {
    name: '2x Extra Large (2xl) - 1536px',
    styles: {
      width: '1536px',
      height: '100%',
    },
  },
};

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...customViewports,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};

export default preview;
