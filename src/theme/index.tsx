import React from 'react';
import { useMemo } from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import { shadows } from './shadows';
import { palette } from './palette';
// import { shadows } from './shadows';
import { overrides } from './overrides';
import { typography } from './typography';
import { customShadows } from './custom-shadows';

// ----------------------------------------------------------------------
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    loki: true;
    kang: true
  }
}
// export interface MemoizedValue extends ThemeOptions {
//   palette: Palette;
//   typography: TypographyType;
//   customShadows: CustomShadow;
//   shape: { borderRadius: number };
//   components: Components;
//   shadows: string[]
// }



export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const memoizedValue = useMemo(
    () => ({
      palette: palette(),
      typography,
      shadows: shadows() as never,
      customShadows: customShadows(),
      shape: { borderRadius: 8 },
    }),
    []
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme: any = createTheme(memoizedValue);
  theme.components = overrides(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
