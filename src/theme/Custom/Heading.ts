import { defineStyle } from '@chakra-ui/react';

export const heroText = defineStyle({
  pointerEvents: 'none',
  letterSpacing: '4px',
  textAlign: 'center',
  fontSize: ['40px', '48px', '60px'],
  fontFamily: 'heebo',
  color: 'Brand.White'
});

export const heroSubtext = defineStyle({
  pointerEvents: 'none',
  letterSpacing: '2px',
  textAlign: 'center',
  fontSize: ['24px', '32px', '40px'],
  fontFamily: 'heebo',
  color: 'Brand.Celestial',
  textShadow: '0 0 3px black',
  transition: 'font-size .3s ease'
});
