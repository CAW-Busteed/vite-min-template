import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /* Put your mantine theme override here */

  // defined color schemes
  colors: {
    forestGreen: ['#62d75f', '#34c230', '	#248721', '#228B22', '#051f20', '#0b2b26', '#163832', '#235347', '#8eb69b', '#daf1de'],
    navyBlue: ['#000035', '#000042', '#000053', '#000068', '	#1c1c84', '#0000aa', '	#0000dd', '	#0044ff', '	#0077dd', '#0077dd'],

  },

  /** primary color for controls and links */
  primaryColor: 'teal',

  /** background color for various components: modal, notifications, etc. */
  white: '#f3f3f3',

  /** text color */
  black: '#333',

  /** border radius value */
  // radius: '4px',


  /** font-family for all text elements */
  fontFamily: 'Lato, sans-serif',

  /* Lato for site in general, consider Crimson text for quotes and text */
  /* Colors should stick to:
  forest green #228B22 (bright),  #051f20, #0b2b26, #163832, #235347, #8eb69b and #daf1de 
  navy blue, #000035,  #000042,  #000053,  #000068, 
  and slate gray */


});

// TODO: create a sustainability theme, a coding theme, and a writing theme.
