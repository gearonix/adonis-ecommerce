import {createViewPorts} from './builders'
import {addDecorator} from '@storybook/react';
import {GoogleOAuthDecorator, ReduxDecorator, StyleDecorator} from '../src/shared/config/storybook/decorators';

export const parameters = {
  viewport: {
    viewports: createViewPorts()
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(StyleDecorator)
addDecorator(ReduxDecorator)
addDecorator(GoogleOAuthDecorator)
