
export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    BgColor?: string;
    chipBgColor?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [

    { header: 'Home' },
    {
        title: 'Dashboard',
        icon: 'widget-add-line-duotone',
        to: '/'
    },
    { header: 'utilities' },
    {
        title: 'Typography',
        icon: 'text-circle-outline',
        to: '/ui/typography'
    },
    {
        title: 'Shadow',
        icon: 'watch-square-minimalistic-charge-line-duotone',
        to: '/ui/shadow'
    },
    { header: 'auth' },
    {
        title: 'Login',
        icon: 'login-3-line-duotone',
        to: '/auth/login'
    },
    {
        title: 'Register',
        icon: 'user-plus-rounded-line-duotone',
        to: '/auth/register'
    },
    { header: 'Extra' },
    {
        title: 'Icons',
        icon: 'sticker-smile-circle-2-line-duotone',
        to: '/icons'
    },
    {
        title: 'Sample Page',
        icon: 'planet-3-line-duotone',
        to: '/sample-page'
    },

];

export default sidebarItem;
