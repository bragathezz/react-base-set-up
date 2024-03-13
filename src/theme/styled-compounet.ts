import { styled, CSSObject } from '@mui/system';
import { Switch, switchClasses } from '@mui/material';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';

import { ThemeProps } from '../configs/ThemeConfig';
import { NAV } from '../views/layouts/utils/config-layout';
import { tickImage, cancelImage } from '../helper/AssetHelper';

const openedMixin = (theme?: ThemeProps): CSSObject => ({
    width: NAV.WIDTH,
    transition: theme?.transitions.create('width', {
        easing: theme?.transitions.easing.sharp,
        duration: theme?.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});
const closedMixin = (theme?: ThemeProps): CSSObject => ({
    transition: theme?.transitions.create('width', {
        easing: theme?.transitions.easing.sharp,
        duration: theme?.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme?.spacing(7)} + 1px)`,
    [theme?.breakpoints.up('sm') || '']: {
        width: `calc(${theme?.spacing(8)} + 1px)`,
    },
});
export const CustomDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }: { theme?: ThemeProps; open: boolean }) => ({
        width: NAV.WIDTH,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            [`& .${drawerClasses.paper}`]: openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            [`& .${drawerClasses.paper}`]: closedMixin(theme),
        }),
    })
);

export const ActiveInactiveSwitch = styled(Switch)(({ theme }: { theme?: ThemeProps }) => ({
    width: '8.125rem',
    height: '3.0625rem',
    padding: 6,
    [`& .${switchClasses.switchBase}`]: {
        margin: 0,
        padding: 10,
        [`& .${switchClasses.input}`]: {
            left: '-150%',
            // width: '400%',
            width: '12.5rem',
        },
        transform: 'translateX(0.0625rem)',
        [`&.${switchClasses.checked}`]: {
            transform: 'translateX(5.125rem)',
            [`& .${switchClasses.thumb}`]: {
                backgroundColor: theme?.palette.success.main,
            },
            [`& .${switchClasses.thumb}:before`]: {
                backgroundImage: `url(${tickImage})`,
            },
            [`& + .${switchClasses.track}`]: {
                opacity: 2,
                backgroundColor: theme?.palette.success.light,
                color: theme?.palette.success.main,
            },
            [`& + .${switchClasses.track}:before`]: {
                content: "'Active'",
                fontWeight: theme?.typography.fontWeightBold,
                margin: '0px',
                position: 'absolute',
                top: '27%',
                left: '16%',
            },
        },
    },
    [`& .${switchClasses.thumb}`]: {
        width: 28,
        height: 28,
        backgroundColor: theme?.palette.error.main,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${cancelImage})`,
        },
    },
    [`& .${switchClasses.track}`]: {
        opacity: 2,
        backgroundColor: theme?.palette.error.light,
        color: theme?.palette.error.main,
        borderRadius: 200 / 2,
        '&::before': {
            content: "'Inactive'",
            margin: '0px',
            position: 'absolute',
            fontWeight: theme?.typography.fontWeightBold,
            top: '27%',
            left: '41%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            // fontWieht
        },
    },
}));

export const StyledGridOverlay = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    '& .ant-empty-img-1': {
        fill: theme.palette.mode === 'light' ? '#aeb8c2' : '#262626',
    },
    '& .ant-empty-img-2': {
        fill: theme.palette.mode === 'light' ? '#f5f5f7' : '#595959',
    },
    '& .ant-empty-img-3': {
        fill: theme.palette.mode === 'light' ? '#dce0e6' : '#434343',
    },
    '& .ant-empty-img-4': {
        fill: theme.palette.mode === 'light' ? '#fff' : '#1c1c1c',
    },
    '& .ant-empty-img-5': {
        fillOpacity: theme.palette.mode === 'light' ? '0.8' : '0.08',
        fill: theme.palette.mode === 'light' ? '#f5f5f5' : '#fff',
    },
}));
