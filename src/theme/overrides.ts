import { alpha } from '@mui/material/styles';
import { gridClasses } from '@mui/x-data-grid';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { Theme, formLabelClasses, autocompleteClasses, formHelperTextClasses, formControlLabelClasses } from '@mui/material';

// ----------------------------------------------------------------------

export function overrides(theme: Theme) {
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
                    backgroundColor: alpha(theme.palette.grey[900] || '', 0.8),
                },
                invisible: {
                    background: 'transparent',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                containedInherit: {
                    color: theme.palette.common.white,
                    backgroundColor: theme.palette.grey[800],
                    '&:hover': {
                        color: theme.palette.common.white,
                        backgroundColor: theme.palette.grey[800],
                    },
                },
                sizeLarge: {
                    minHeight: 48,
                },
            },
            // variants: [
            //     {
            //         props: { variant: 'export' },
            //         style: {
            //             color: theme.palette.common.black,
            //             backgroundColor: theme.palette.common.white,
            //             height: '2.5rem',
            //             '&:hover': {
            //                 color: theme.palette.common.black,
            //                 backgroundColor: theme.palette.common.white,
            //             },
            //         },
            //     },
            //     {
            //         props: { variant: 'export', color: 'error' },
            //         style: {
            //             color: theme.palette.common.white,
            //             backgroundColor: theme.palette.customColor.darkRed,
            //             height: '2.5rem',
            //             '&:hover': {
            //                 color: theme.palette.common.white,
            //                 backgroundColor: theme.palette.customColor.darkRed,
            //             },
            //         },
            //     },
            // ],
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: theme.customShadows.card,
                    borderRadius: Number(theme.shape.borderRadius) * 2,
                    position: 'relative',
                    zIndex: 0, // Fix Safari overflow: hidden with border radius
                },
            },
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: { variant: 'h4' },
                subheaderTypographyProps: { variant: 'body2' },
            },
            styleOverrides: {
                root: {
                    padding: theme.spacing(3, 3, 0),
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    [`& .${outlinedInputClasses.inputSizeSmall}`]: {
                        minHeight: `${2.8125 - 16 / 16}rem`,
                    },
                    [`& .${outlinedInputClasses.notchedOutline}`]: {
                        border: '1px solid  #DCDCDC',
                        borderRadius: '0.5rem',
                    },
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    [`& .${autocompleteClasses.tagSizeSmall}`]: {
                        minHeight: `${2.8125 - 16 / 16}rem`,
                    },
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: theme.palette.customColor.darkGreyOne,
                },
            },
        },
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    border: 'none',
                    [`& .${gridClasses.columnHeaders}`]: {
                        color: theme.palette.grey[600],
                        // paddingInline: '10px',
                    },
                    [`& .${gridClasses.cell}`]: {
                        borderBottom: 'none',
                        fontWeight: 400,
                    },
                    [`& .${gridClasses.main}`]: {
                        padding: '1.25rem 0rem',
                        background: theme.palette.common.white,
                        borderRadius: '0.75rem',
                        boxShadow: theme.customShadows.table,
                    },
                    [`& .${gridClasses.footerContainer}`]: {
                        borderTop: 'none',
                    },
                    [`& .${gridClasses.row}:nth-child(odd)`]: {
                        backgroundColor: theme.palette.grey[200],
                    },
                    [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]: {
                        outline: 'none',
                    },
                    [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]: {
                        outline: 'none',
                    },
                    [`& .${gridClasses.row}`]: {
                        // marginInline: '10px',
                    },
                    [`& .${gridClasses.row}:hover`]: {
                        backgroundColor: theme.palette.grey[100],
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    minHeight: `${3}rem`,
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.grey[800],
                    fontWeight: 600,
                    marginBottom: theme.spacing(1),
                    [`& .${formLabelClasses.asterisk}`]: {
                        color: theme.palette.error.main,
                    },
                },
            },
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    [`& .${formControlLabelClasses.label}`]: {
                        fontWeight: 600,
                    },
                    [`& .${formLabelClasses.asterisk}`]: {
                        color: theme.palette.error.main,
                    },
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    [`&.${formHelperTextClasses.root}`]: {
                        color: theme.palette.error.main,
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
                    color: theme.palette.text.secondary,
                    backgroundColor: theme.palette.background.neutral,
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.grey[800],
                },
                arrow: {
                    color: theme.palette.grey[800],
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                paragraph: {
                    marginBottom: theme.spacing(2),
                },
                gutterBottom: {
                    marginBottom: theme.spacing(1),
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    ...theme.typography.body2,
                },
            },
        },
    };
}
