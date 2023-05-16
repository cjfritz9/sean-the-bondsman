import { extendTheme } from '@chakra-ui/react';
import * as Custom from './StyleConfig';

const theme = extendTheme({
  components: {
    Link: Custom.link,
    Heading: Custom.heading,
    Button: Custom.button
  },
  colors: {
    Brand: {
      White: '#FFFFFF',
      French: '#D7C9CE',
      Celestial: '#166494',
      Penn: '#0D2533',
      Persian: '#2541B2',
      Rose: '#AF929D'
    }
  }
});

export default theme;
