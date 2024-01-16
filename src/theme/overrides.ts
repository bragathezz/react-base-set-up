import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import {
  alpha,
  TypeText,
  CommonColors,
  ThemeOptions,
  SimplePaletteColorOptions,
} from '@mui/material/styles';

import { PaletteTheme } from './palette';
import { TypographyType } from './typography';
import { CustomShadow } from './custom-shadows';

// ----------------------------------------------------------------------
export type SpacingArgument = number | string;

interface PaletteProps extends PaletteTheme {
  secondary: SimplePaletteColorOptions;
  primary: SimplePaletteColorOptions;
  text: Partial<TypeText>;
  common: Partial<CommonColors>;
}
interface ThemeConfig extends ThemeOptions {
  palette: PaletteProps;
  customShadows: CustomShadow;
  shape: { borderRadius: number };
  typography: TypographyType;
  spacing: (
    arg0?: SpacingArgument,
    arg1?: SpacingArgument,
    arg2?: SpacingArgument,
    arg3?: SpacingArgument
  ) => string;
}

export function overrides({ palette, customShadows, shape, typography, spacing }: ThemeConfig) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },
        img: {
          maxWidth: '100%',
          display: 'inline-block',
          verticalAlign: 'bottom',
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(palette.grey[900] || '', 0.8),
        },
        invisible: {
          background: 'transparent',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedInherit: {
          color: palette.common.white,
          backgroundColor: palette.grey[800],
          '&:hover': {
            color: palette.common.white,
            backgroundColor: palette.grey[800],
          },
        },
        sizeLarge: {
          minHeight: 48,
        },
      },
      variants: [
        {
          props: { variant: 'loki' },
          style: {
            textTransform: 'none',
            border: `2px dashed green`,
            color: 'green',
            '&:hover': {
              color: palette.common.white,
              border: `66px dashed green`,
              backgroundColor: palette.grey[800],
            },
          },
        },
        {
          props: { variant: 'loki', color: 'secondary' },
          style: {
            border: `50px dashed ${palette.secondary.main}`,
            color: palette.secondary.main,
          },
        },
        {
          props: { variant: 'loki', size: 'large' },
          style: {
            borderWidth: 4,
          },
        },
        {
          props: { variant: 'loki', color: 'secondary', size: 'large' },
          style: {
            fontSize: 18,
          },
        },
        {
          props: { variant: 'kang' },
          style: {
            textTransform: 'none',
            border: `2px dotted ${palette.primary.main}`,
            color: palette.primary.main,
          },
        },
        {
          props: { variant: 'kang', color: 'secondary' },
          style: {
            fontSize: 18,
            color: palette.secondary.main,
            border: `2px dashed ${palette.primary.main}`,
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: customShadows?.card || '',
          borderRadius: Number(shape.borderRadius) * 2,
          position: 'relative',
          zIndex: 0, // Fix Safari overflow: hidden with border radius
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: { variant: 'body2' },
      },
      styleOverrides: {
        root: {
          padding: spacing(3, 3, 0),
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: alpha(palette.grey[500] || '', 0.24),
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 1,
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: palette.text.secondary,
          backgroundColor: palette.background.neutral,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: palette.grey[800],
        },
        arrow: {
          color: palette.grey[800],
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: spacing(2),
        },
        gutterBottom: {
          marginBottom: spacing(1),
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ...typography.body2,
        },
      },
    },
  };
}
