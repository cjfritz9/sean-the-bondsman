import { defineStyle } from '@chakra-ui/react';

export const baseButton = defineStyle({
  width: '10rem',
  paddingY: '1.75rem',
  borderRadius: '5px',
  bgColor: 'Brand.French',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 'bold',
  fontSize: '20px',
  _hover: {
    filter: 'brightness(1.1)'
  },
  _active: {
    transform: 'scale(.98)'
  }
});

export const altButton = defineStyle({
  color: 'Brand.White',
  bgColor: '#166494'
});
