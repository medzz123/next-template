import React from 'react';

import { globalStyles } from '../src/theme/config';

/**
 * Providers that the components uses, global decorator added to all stories.
 */
const Providers = ({ children }) => {
  globalStyles();

  return <div style={{ padding: 20 }}>{children}</div>;
};

const providersDecorator = (storyFn) => <Providers>{storyFn()}</Providers>;

export default providersDecorator;
