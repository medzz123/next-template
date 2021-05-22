import { styled } from '@theme/config';

export const TextContainer = styled('p', {
  color: '$purple600',

  variants: {
    size: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
      },
    },
  },
});
