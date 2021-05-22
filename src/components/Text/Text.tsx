import React, { FunctionComponent } from 'react';

import { TextProps } from './Text.models';
import { TextContainer } from './Text.styles';

const Text: FunctionComponent<TextProps> = (props) => {
  const { children } = props;

  return <TextContainer data-testid="text">{children}</TextContainer>;
};

export default Text;
