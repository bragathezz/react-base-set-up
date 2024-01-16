import { useMemo } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { Theme, Shadows, createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import { shadows } from './shadows';
import { palette } from './palette';
import { overrides } from './overrides';
import { typography } from './typography';
import { customShadows } from './custom-shadows';

// ----------------------------------------------------------------------



export interface ThemeProps extends Theme {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  components?: any
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const memoizedValue = useMemo(
    () => ({
      palette: palette(),
      typography,
      shadows: shadows() as Shadows,
      customShadows: customShadows(),
      shape: { borderRadius: 5 },
      transitions: {
        duration: {
          shortest: 150,
          shorter: 200,
          short: 250,
          standard: 300,
          complex: 375,
          enteringScreen: 400,
          leavingScreen: 400,
        },
      },
    }),
    []
  );

  const theme: ThemeProps = createTheme(memoizedValue);
  theme.components = overrides(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

