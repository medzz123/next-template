import { styled } from '@theme/config';

export const ThemeSwitchContainer = styled('button', {
  backgroundColor: '$hiContrast',
  color: '$loContrast',
  size: '40px',
  br: '50%',
  center: 'row',
  position: 'fixed',
  bottom: '24px',
  right: '24px',
  cursor: 'pointer',
  outline: 'none',
  border: 'none',
  transition: 'all 200ms ease',
  '&:hover, &:focus': {
    boxShadow: '0 0 0 2px $colors$purple500',
  },
});
