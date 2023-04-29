import { defineStyleConfig } from '@chakra-ui/react';
import { headerLink, headerLinkSelected } from './Custom/Link';
import { heroText, heroSubtext, iwtTitle } from './Custom/Heading';
import { baseButton, altButton } from './Custom/Button';

export const link = defineStyleConfig({
  variants: { headerLink, headerLinkSelected }
});

export const heading = defineStyleConfig({
  variants: { heroText, heroSubtext, iwtTitle }
});

export const button = defineStyleConfig({
  baseStyle: baseButton,
  variants: { altButton }
});
