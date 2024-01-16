import { alpha, PaletteOptions } from '@mui/material/styles';
import { ColorPartial } from '@mui/material/styles/createPalette';

// ----------------------------------------------------------------------

type BackgroundColors = {
  neutral?: string;
  paper?: string;
  default?: string;
};

export interface greyProps extends ColorPartial {
  0?: string;
}
export interface customgreyProps {
  darkRed: string;
  darkGreyOne: string;
  darkGreyTwo: string;
  lightPink: string;
  darkPink: string;
}
export interface PaletteTheme extends PaletteOptions {
  background: BackgroundColors;
  grey: greyProps;
  customColor: customgreyProps;
}
//  & BaseColors;
// SETUP COLORS

export const grey = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#898989',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

export const customColor = {
  darkRed: '#F25C54',
  darkGreyOne: '#808285',
  darkGreyTwo: '#686868',
  lightPink: '#FEECF1',
  darkPink: '#F1416C',
};
export const primary = {
  lighter: '#C684FF',
  light: '#fabb72',
  main: '#F5811F',
  dark: '#F05B22',
  darker: '#27097A',
  contrastText: '#FFFFFF',
  backgoundColorLight: '#DCDCDC',
};

export const secondary = {
  lighter: '#2EC4B6',
  light: '#73BAFB',
  main: '#00B2FF',
  dark: '#0C44AE',
  darker: '#042174',
  contrastText: '#FFFFFF',
  backgoundColorLight: '#DCDCDC',
};

export const info = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#FFFFFF',
  backgoundColorLight: '#DCDCDC',
  extralight: '#808285',
};

export const success = {
  lighter: '#C8FAD6',
  light: '#DCF5E7',
  main: '#50CD89',
  dark: '#007867',
  darker: '#004B50',
  contrastText: '#FFFFFF',
  backgoundColorLight: '#DCDCDC',
};

export const warning = {
  lighter: '#FFF5CC',
  light: '#FEECF1',
  main: '#F1416C',
  dark: '#B76E00',
  darker: '#7A4100',
  extralight: '#F25C54',
  backgoundColorLight: '#DCDCDC',
  contrastText: grey[800],
};

export const error = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#FFFFFF',
};

export const common = {
  black: '#000000',
  white: '#FFFFFF',
};

export const action = {
  hover: alpha(grey[500], 0.08),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const base = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  // extrasparecolor,
  customColor,
  grey,
  common,
  divider: alpha(grey[500], 0.2),
  action,
};

// ----------------------------------------------------------------------

export function palette(): PaletteTheme {
  return {
    ...base,
    mode: 'light',

    text: {
      primary: grey[800],
      secondary: grey[600],
      disabled: grey[500],
    },
    background: {
      paper: '#FFFFFF',
      default: grey[100],
      neutral: grey[200],
    },
    action: {
      ...base.action,
      active: grey[600],
    },
  };
}
