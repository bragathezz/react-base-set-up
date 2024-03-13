import { CommonColors } from '@mui/material/styles/createPalette';
import { alpha, PaletteOptions, PaletteColorOptions } from '@mui/material/styles';

// ----------------------------------------------------------------------

export interface customgreyProps {
    darkRed: string;
    darkGreyOne: string;
    darkGreyTwo: string;
    lightPink: string;
    darkPink: string;
    ligthGreyOne: string;
}
export interface PaletteTheme extends PaletteOptions {
    customColor: customgreyProps;
}

export const grey = {
    100: '#F9FAFB',
    200: '#F9F9F9',
    300: '#DFE3E8',
    400: '#C4CDD5',
    500: '#919EAB',
    600: '#898989',
    700: '#454F5B',
    800: '#202020',
    900: '#161C24',
};

export const customColor: customgreyProps = {
    darkRed: '#F25C54',
    darkGreyOne: '#808285',
    darkGreyTwo: '#686868',
    ligthGreyOne: '#DCDCDC',
    lightPink: '#FEECF1',
    darkPink: '#F1416C',
};

export const primary: PaletteColorOptions = {
    lighter: '#f9ac6a',
    light: '#f6933e',
    main: '#F5811F',
    dark: '#f57b11',
    darker: '#da6804',
    contrastText: '#FFFFFF',
    backgoundColorLight: '#fdc99e',
};

export const secondary: PaletteColorOptions = {
    lighter: '#3cc2fe',
    light: '#23b9fe',
    main: '#00B2FF',
    dark: '#009ee4',
    darker: '#008dcd',
    contrastText: '#FFFFFF',
    backgoundColorLight: '#64d0ff',
};

export const info: PaletteColorOptions = {
    lighter: '#DCDCDC',
    light: '#DCDCDC',
    main: ' #898989',
    dark: '#DCDCDC',
    darker: '#DCDCDC',
    contrastText: '#FFFFFF',
    backgoundColorLight: '#DCDCDC',
    extralight: '#808285',
};

export const success: PaletteColorOptions = {
    lighter: '#C8FAD6',
    light: '#DCF5E7',
    main: '#50CD89',
    dark: '#007867',
    darker: '#004B50',
    contrastText: '#FFFFFF',
    backgoundColorLight: '#DCDCDC',
};

export const warning: PaletteColorOptions = {
    lighter: '#FFF5CC',
    light: '#FEECF1',
    main: '#F1416C',
    dark: '#B76E00',
    darker: '#7A4100',
    extralight: '#F25C54',
    backgoundColorLight: '#DCDCDC',
    contrastText: grey[800],
};

export const error: PaletteColorOptions = {
    lighter: '#faa6a2',
    light: '#FEECF1',
    main: '#F1416C',
    dark: '#f14d44',
    darker: '#ef3228',
    contrastText: '#FFFFFF',
};

export const common: Partial<CommonColors> = {
    black: '#202020',
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
    customColor,
    grey,
    common,
    divider: alpha(grey[500], 0.2),
    action,
};

// ----------------------------------------------------------------------

export function palette(theme?: object | null): PaletteTheme {
    const obj = {
        ...base,
        primary: theme ? theme : base.primary,
    };
    return {
        ...obj,
        mode: 'light',

        text: {
            primary: base.grey[800],
            secondary: base.grey[600],
            disabled: base.grey[500],
        },
        background: {
            paper: base.common.white,
            default: base.grey[100],
            neutral: base.grey[200],
        },
        action: {
            ...base.action,
            active: base.grey[600],
        },
    };
}
