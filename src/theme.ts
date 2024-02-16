import { createTheme } from "@mantine/core";

export const basicTheme = createTheme({
  /* Put your mantine theme override here */

  // defined color schemes
  colors: {
    forestGreen: ['#62d75f', '#34c230', '	#248721', '#228B22', '#051f20', '#0b2b26', '#163832', '#235347', '#8eb69b', '#daf1de'],
    navyBlue: ['#000035', '#000042', '#000053', '#000068', '	#1c1c84', '#0000aa', '	#0000dd', '	#0044ff', '	#0077dd', '#0077dd'],
    velvetPurple: ['#8B43FA', '#FA43EB', '#C643FA', '#4F43FA', '#FA437E', '#B400FA', '#6100FA', '#553D7A', '#7A3D75', '#B300FA']
  },

  /** primary color for controls and links */
  primaryColor: 'gray',

  /** background color for various components: modal, notifications, etc. */
  white: '#f3f3f3',

  /** text color */
  black: '#333',

  /** border radius value */
  // radius: { sm: 4, md: 8, lg: 12, xl: 16 },


  /** font-family for all text elements */
  fontFamily: 'Lato, sans-serif',

  /* Lato for site in general, consider Crimson text for quotes and text */
  /* Colors should stick to:
  forest green #228B22 (bright),  #051f20, #0b2b26, #163832, #235347, #8eb69b and #daf1de 
  navy blue, #000035,  #000042,  #000053,  #000068, 
  and slate gray */


});

export const greenTheme = createTheme({
  /** primary color for controls and links */
  primaryColor: 'green',

  /** background color for various components: modal, notifications, etc. */
  white: '#95F082',

  /** text color */
  black: '#333',


  /** font-family for all text elements */
  fontFamily: 'Lato, sans-serif',
});

export const codeTheme = createTheme({
  /** primary color for controls and links */
  primaryColor: 'blue',

  /** background color for various components: modal, notifications, etc. */
  white: '#B4CCF0',

  /** text color */
  black: '#333',


  /** font-family for all text elements */
  fontFamily: 'Lato, sans-serif',
});

export const writeTheme = createTheme({
  /** primary color for controls and links */
  primaryColor: 'teal',

  /** background color for various components: modal, notifications, etc. */
  white: '#f3f3f3',

  /** text color */
  black: '#333',


  /** font-family for all text elements */
  fontFamily: 'Lato, sans-serif',
});


// TODO: set the background colors without removing the text color
//TODO: set font, colors, lines, background colors and title parameters based on the theme
