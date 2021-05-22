import { render } from '@test/library';
import React from 'react';

import Button from './Button';

test('Should render button', () => {
  const { container } = render(<Button>Hello</Button>);

  expect(container).toMatchSnapshot();
});
