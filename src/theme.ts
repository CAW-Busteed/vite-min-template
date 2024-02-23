import { createTheme } from "@mantine/core";

const colorChoice = {
  forestGreen: ['#daf1de', '#62d75f', '#8eb69b', '#34c230', '#248721', '#228B22', '#0b2b26', '#235347', '#051f20', '#163832'],
  monoGreen: ['#EAFFD4', '#BBF5BA', '#C9F1A1', '#95C763', '#26DB00', '#36B11D', '#3C862D', '#365C2E', '#253322', '#2C332B'],
  navyBlue: ['#BBE8F2', '#94D7F2', '#5FB6D9', '#0077dd', '#0044ff', '#0000dd', '#1c1c84', '#000068', '#000053', '#000035'],
  monoBlue: ['#B5DFF4', '#6CB3F5', '#2E92F5', '#4682CA', '#1576F4', '#3475CA', '#446CA0', '#3B4E75', '#323A4B', '#31353D'],
  velvetPurple: ['#e099fd', '#D77BFB', '#C643FA', '#B400FA', '#8B43FA', '#6100FA', '#c232fb', '#B300FA', '#6b0096', '#7A3D75', '#FA43EB', '#FA437E', '#4F43FA'],
  seaTeal: ['#B0F5E4', '#91F5E3', '#50F5E2', '#12F5D7', '#30CAB6', '#64CABE', '#40A093', '#43756F', '#1D4B3F', '#0D3D31'],
  earthyBrown: ['#B79983', '#B8845C', '#B87035', '#956038', '#75543B', '#554335', '#75451C', '#753B09', '#763804', '#362E28'],
  gold: ['#F2DC99', '#F2D680', '#F2C744', '#D9AF62', '#BF8C4E', '#D6A41B', '#D99E32', '#BF7839', '#8C5511', '#733B0A'],
  peach: ['#D5A5B9', '#FFAA69', '#FF9A82', '#FF768B', '#FF8F9E', '#FF875E', '#FF530D', '#FF0DFF', '#E80C7A', '#D600A1'], 
  neutral: ['#E0F2F2', '#D5D0C4', '#A5B3B3', '#9CA5B1', '#877C73', '#6A7373', '#6C6B68', '#5E6666', '#44474D', '#323636']
};


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


//TODO: set font, colors, lines, background colors and title parameters based on the theme
