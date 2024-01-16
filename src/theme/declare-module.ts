import { PaletteTheme } from './palette';
import { CustomShadow } from './custom-shadows';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    loki: true;
    kang: true;
  }
}
declare module '@mui/material/styles' {
  interface PaletteColor {
    darker?: string;
    lighter?: string;
    backgoundColorLight?: string;
    extralight?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
    lighter?: string;
    backgoundColorLight?: string;
    extralight?: string;
  }
  interface Palette {
    customColor: PaletteTheme['customColor'];
  }
  interface PaletteOptions {
    customColor: PaletteTheme['customColor'];
  }
  interface Theme {
    customShadows: CustomShadow;
  }
}
