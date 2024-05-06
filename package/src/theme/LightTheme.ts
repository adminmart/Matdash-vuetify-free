import type { ThemeTypes } from '@/types/themeTypes/ThemeType';

const BLUE_THEME: ThemeTypes = {
    name: 'BLUE_THEME',
    dark: false,
    variables: {
        'border-color': '#e0e6eb',
        'border-opacity': 1
    },
    colors: {
        primary: '#635BFF',
        secondary: '#14E9E2',
        info: '#46caeb',
        success: '#36c76c',
        warning: '#ffd648',
        error: '#ff6692',
        lightprimary: '#D5D3FC',
        lightsecondary: '#D0FBF9',
        lightsuccess: '#E1F7E9',
        lighterror: '#FFD9E4',
        lightinfo: '#DAF4FB',
        lightwarning: '#FFF7DA',
        textPrimary: '#0a2540',
        textSecondary: '#7b8893',
        borderColor: '#e0e6eb',
        containerBg: '#ffffff',
        background: '#F4F7FB',
        hoverColor: '#f6f9fc',
        surface: '#fff',
        grey100: '#EAEFF4',
        grey200: '#29343d',
        light: '#EFF4FA',
        muted:'#526b7a'
    }
};



export { BLUE_THEME};
