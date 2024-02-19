import { createTheme } from "@mantine/core";

export const basicTheme = createTheme({
  /* Put your mantine theme override here */

  // defined color schemes
  colors: {
    forestGreen: ['#daf1de', '#62d75f', '#8eb69b', '#34c230', '#248721', '#228B22', '#0b2b26', '#235347', '#051f20', '#163832'],
    navyBlue: ['#BBE8F2', '#94D7F2', '#5FB6D9', '#0077dd', '#0044ff', '#0000dd', '#1c1c84', '#000068', '#000053', '#000035'],
    velvetPurple: ['#e099fd', '#D77BFB', '#C643FA', '#B400FA', '#8B43FA', '#6100FA', '#c232fb', '#B300FA', '#6b0096', '#7A3D75', '#FA43EB', '#FA437E', '#4F43FA'],
    bgColor: ['#E0F2F2', '#D5D0C4', '#A5B3B3', '#9CA5B1', '#877C73', '#6A7373', '#6C6B68', '#5E6666', '#44474D', '#323636']
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
  white: '#f3f3f3',

  /** text color */
  black: '#333',

  colors: {
    bgColor: ['#daf1de', '#62d75f', '#8eb69b', '#34c230', '#248721', '#228B22', '#0b2b26', '#235347', '#051f20', '#163832'],
    navyBlue: ['#BBE8F2', '#94D7F2', '#5FB6D9', '#0077dd', '#0044ff', '#0000dd', '#1c1c84', '#000068', '#000053', '#000035'],
    velvetPurple: ['#e099fd', '#D77BFB', '#C643FA', '#B400FA', '#8B43FA', '#6100FA', '#c232fb', '#B300FA', '#6b0096', '#7A3D75', '#FA43EB', '#FA437E', '#4F43FA'],
    neutral: ['#E0F2F2', '#D5D0C4', '#A5B3B3', '#9CA5B1', '#877C73', '#6A7373', '#6C6B68', '#5E6666', '#44474D', '#323636']
  },

  /** font-family for all text elements */
  fontFamily: 'Lato, sans-serif',
});

export const codeTheme = createTheme({
  /** primary color for controls and links */
  primaryColor: 'blue',

  /** background color for various components: modal, notifications, etc. */
  white: '#f3f3f3',

  /** text color */
  black: '#333',

  colors: {
    forestGreen: ['#daf1de', '#62d75f', '#8eb69b', '#34c230', '#248721', '#228B22', '#0b2b26', '#235347', '#051f20', '#163832'],
    bgColor: ['#BBE8F2', '#94D7F2', '#5FB6D9', '#0077dd', '#0044ff', '#0000dd', '#1c1c84', '#000068', '#000053', '#000035'],
    velvetPurple: ['#e099fd', '#D77BFB', '#C643FA', '#B400FA', '#8B43FA', '#6100FA', '#c232fb', '#B300FA', '#6b0096', '#7A3D75', '#FA43EB', '#FA437E', '#4F43FA'],
    neutral: ['#E0F2F2', '#D5D0C4', '#A5B3B3', '#9CA5B1', '#877C73', '#6A7373', '#6C6B68', '#5E6666', '#44474D', '#323636']
  },

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

  colors: {
    forestGreen: ['#daf1de', '#62d75f', '#8eb69b', '#34c230', '#248721', '#228B22', '#0b2b26', '#235347', '#051f20', '#163832'],
    navyBlue: ['#BBE8F2', '#94D7F2', '#5FB6D9', '#0077dd', '#0044ff', '#0000dd', '#1c1c84', '#000068', '#000053', '#000035'],
    bgColor: ['#e099fd', '#D77BFB', '#C643FA', '#B400FA', '#8B43FA', '#6100FA', '#c232fb', '#B300FA', '#6b0096', '#7A3D75', '#FA43EB', '#FA437E', '#4F43FA'],
    neutral: ['#E0F2F2', '#D5D0C4', '#A5B3B3', '#9CA5B1', '#877C73', '#6A7373', '#6C6B68', '#5E6666', '#44474D', '#323636']
  },


  /** font-family for all text elements */
  fontFamily: 'Lato, sans-serif',
});


// TODO: set the background colors without removing the text color
//TODO: set font, colors, lines, background colors and title parameters based on the theme
