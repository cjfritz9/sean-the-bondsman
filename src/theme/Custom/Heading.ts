import { defineStyle } from '@chakra-ui/react';

export const heroText = defineStyle({
  pointerEvents: 'none',
  letterSpacing: '4px',
  textAlign: 'center',
  fontSize: ['40px', '48px', '60px'],
  fontFamily: 'Kanit, sans-serif',
  color: 'Brand.White'
});

export const heroSubtext = defineStyle({
  cursor: 'pointer',
  letterSpacing: '2px',
  textAlign: 'center',
  fontSize: ['24px', '32px', '40px'],
  fontFamily: 'Kanit, sans-serif',
  color: '#2A94D4',
  textShadow: '0 0 3px black',
  transition: 'font-size .3s ease'
});

// 'iwt' = image with text
export const iwtTitle = defineStyle({
  pointerEvents: 'none',
  textAlign: 'left',
  fontSize: ['24px', '28px', '32px'],
  fontFamily: 'Kanit, sans-serif',
  color: 'black'
});
