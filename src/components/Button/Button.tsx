import React, { FunctionComponent } from 'react';

import { ButtonProps } from './Button.models';
import { ButtonContainer } from './Button.styles';

const Button: FunctionComponent<ButtonProps> = (props): React.ReactElement => {
  const { children } = props;

  return <ButtonContainer data-testid="button">{children}</ButtonContainer>;
};

export default Button;
