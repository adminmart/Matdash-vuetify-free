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
    external?: boolean;
}

const sidebarItem: menu[] = [
    { header: 'Home' },
    {
        title: 'Dashboard',
        icon: 'adhesive-plaster-outline',
        to: '/'
    },
    {
        title: 'Dashboard1',
        icon: 'widget-add-line-duotone',
        to: 'https://matdash-vuetify-main.netlify.app/dashboards/dashboard1',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Dashboard2',
        icon: 'chart-line-duotone',
        to: 'https://matdash-vuetify-main.netlify.app/dashboards/dashboard2',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Dashboard3',
        icon: 'screencast-2-line-duotone',
        to: 'https://matdash-vuetify-main.netlify.app/dashboards/dashboard3',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Front Pages',
        icon: 'home-angle-linear',
        to: '/front',
        children: [
            {
                title: 'Homepage',
                to: 'https://matdash-vuetify-main.netlify.app/front-page/homepage',
                chip: 'Pro',
                external: true
            },
            {
                title: 'About Us',
                to: 'https://matdash-vuetify-main.netlify.app/front-page/about-us',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Blog',
                to: 'https://matdash-vuetify-main.netlify.app/front-page/blog/posts',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Blog Details',
                to: 'https://matdash-vuetify-main.netlify.app/front-page/blog/early-black-friday-amazon-deals-cheap-tvs-headphones',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Contact Us',
                to: 'https://matdash-vuetify-main.netlify.app/front-page/contact-us',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Portfolio',
                to: 'https://matdash-vuetify-main.netlify.app/front-page/portfolio',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Pricing',
                to: 'https://matdash-vuetify-main.netlify.app/front-page/pricing',
                chip: 'Pro',
                external: true
            }
        ]
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
    { header: 'apps' },
    {
        title: 'eCommerce',
        icon: 'cart-3-line-duotone',
        to: '/ecommerce/',
        children: [
            {
                title: 'Shop',
                to: 'https://matdash-vuetify-main.netlify.app/ecommerce/products',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Detail',
                to: 'https://matdash-vuetify-main.netlify.app/ecommerce/product/detail/1',
                chip: 'Pro',
                external: true
            },
            {
                title: 'List',
                to: 'https://matdash-vuetify-main.netlify.app/ecommerce/productlist',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Checkout',
                to: 'https://matdash-vuetify-main.netlify.app/ecommerce/checkout',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Add Product',
                to: 'https://matdash-vuetify-main.netlify.app/ecommerce/add-product',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Edit Product',
                to: 'https://matdash-vuetify-main.netlify.app/ecommerce/edit-product',
                chip: 'Pro',
                external: true
            }
        ]
    },
    {
        title: 'Blog',
        icon: 'widget-4-line-duotone',
        to: '/',
        children: [
            {
                title: 'Blog Posts',
                to: 'https://matdash-vuetify-main.netlify.app/apps/blog/posts',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Blog Details',
                to: 'https://matdash-vuetify-main.netlify.app/apps/blog/early-black-friday-amazon-deals-cheap-tvs-headphones',
                chip: 'Pro',
                external: true
            }
        ]
    },
    {
        title: 'User Profile',
        icon: 'shield-user-line-duotone',
        to: '/',
        children: [
            {
                title: 'Profile',
                to: 'https://matdash-vuetify-main.netlify.app/apps/user/profile',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Followers',
                to: 'https://matdash-vuetify-main.netlify.app/apps/user/profile/followers',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Friends',
                to: 'https://matdash-vuetify-main.netlify.app/apps/user/profile/friends',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Gallery',
                to: 'https://matdash-vuetify-main.netlify.app/apps/user/profile/gallery',
                chip: 'Pro',
                external: true
            }
        ]
    },
    {
        title: 'Invoice',
        icon: 'bill-check-outline',
        to: '/',
        children: [
            {
                title: 'List',
                to: 'https://matdash-vuetify-main.netlify.app/apps/invoice',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Details',
                to: 'https://matdash-vuetify-main.netlify.app/apps/invoice/details/102',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Create',
                to: 'https://matdash-vuetify-main.netlify.app/apps/invoice/create',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Edit',
                to: 'https://matdash-vuetify-main.netlify.app/apps/invoice/edit/102',
                chip: 'Pro',
                external: true
            }
        ]
    },
    {
        title: 'Calendar',
        icon: 'calendar-mark-line-duotone',
        to: 'https://matdash-vuetify-main.netlify.app/apps/calendar',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Email',
        icon: 'letter-linear',
        to: 'https://matdash-vuetify-main.netlify.app/apps/email',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Kanban',
        icon: 'airbuds-case-minimalistic-line-duotone',
        to: 'https://matdash-vuetify-main.netlify.app/apps/kanban',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Chats',
        icon: 'chat-round-line-line-duotone',
        to: 'https://matdash-vuetify-main.netlify.app/apps/chats',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Notes',
        icon: 'document-text-line-duotone',
        to: 'https://matdash-vuetify-main.netlify.app/apps/notes',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Contact',
        icon: 'iphone-line-duotone',
        to: 'https://matdash-vuetify-main.netlify.app/apps/contacts',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Tickets',
        icon: 'ticker-star-outline',
        to: 'https://matdash-vuetify-main.netlify.app/apps/tickets',
        chip: 'Pro',
        external: true
    },
    { header: 'Pages' },
    {
        title: 'Sample Page',
        icon: 'planet-3-line-duotone',
        to: '/sample-page'
    },
    {
        title: 'Pages',
        icon: 'bill-check-outline',
        to: '/',
        children: [
            {
                title: 'Account Setting',
                icon: 'settings-minimalistic-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/pages/account-settings',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Banners Widgets',
                icon: 'align-vertical-spacing-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/widgets/banners',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Cards Widgets',
                icon: 'cardholder-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/widgets/cards',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Charts Widgets',
                icon: 'chart-square-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/widgets/charts',
                chip: 'Pro',
                external: true
            },
            {
                title: 'FAQ',
                icon: 'question-circle-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/pages/faq',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Gallery Lightbox',
                icon: 'gallery-bold-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/pages/gallery-lightbox',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Landing Page',
                icon: 'passport-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Pricing',
                icon: 'dollar-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/pages/pricing',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Search Results',
                icon: 'card-search-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/pages/search-results',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Social Contacts',
                icon: 'chat-round-like-linear',
                to: 'https://matdash-vuetify-main.netlify.app/pages/social-media-contacts',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Treeview',
                icon: 'transmission-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/pages/treeview',
                chip: 'Pro',
                external: true
            }
        ]
    },
    { header: 'Forms' },
    {
        title: 'Form Elements',
        icon: 'text-selection-line-duotone',
        to: '/components/',
        children: [
            {
                title: 'Autocomplete',
                to: 'https://matdash-vuetify-main.netlify.app/forms/form-elements/autocomplete',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Combobox',
                to: 'https://matdash-vuetify-main.netlify.app/forms/form-elements/combobox',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Button',
                to: 'https://matdash-vuetify-main.netlify.app/forms/form-elements/button',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Checkbox',
                to: 'https://matdash-vuetify-main.netlify.app/forms/form-elements/checkbox',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Custom Inputs',
                to: 'https://matdash-vuetify-main.netlify.app/forms/form-elements/custominputs',
                chip: 'Pro',
                external: true
            },
            {
                title: 'File Inputs',
                to: 'https://matdash-vuetify-main.netlify.app/forms/form-elements/fileinputs',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Radio',
                to: 'https://matdash-vuetify-main.netlify.app/forms/form-elements/radio',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Date Time',
                to: 'https://matdash-vuetify-main.netlify.app/forms/form-elements/date-time',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Select',
                to: 'https://matdash-vuetify-main.netlify.app/forms/form-elements/select',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Slider',
                to: 'https://matdash-vuetify-main.netlify.app/forms/form-elements/slider',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Switch',
                to: 'https://matdash-vuetify-main.netlify.app/forms/form-elements/switch',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Time Picker',
                to: 'https://matdash-vuetify-main.netlify.app/forms/form-elements/time-picker',
                chip: 'Pro',
                external: true
            },

            {
                title: 'Stepper',
                to: 'https://matdash-vuetify-main.netlify.app/forms/form-elements/stepper',
                chip: 'Pro',
                external: true
            }
        ]
    },
    {
        title: 'Form Layout',
        icon: 'layers-minimalistic-outline',
        to: 'https://matdash-vuetify-main.netlify.app/forms/form-layouts',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Form Horizontal',
        icon: 'password-minimalistic-input-line-duotone',
        to: 'https://matdash-vuetify-main.netlify.app/forms/form-horizontal',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Form Vertical',
        icon: 'slider-vertical-line-duotone',
        to: 'https://matdash-vuetify-main.netlify.app/forms/form-vertical',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Form Custom',
        icon: 'clapperboard-play-outline',
        to: 'https://matdash-vuetify-main.netlify.app/forms/form-custom',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Form Validation',
        icon: 'soundwave-square-line-duotone',
        to: 'https://matdash-vuetify-main.netlify.app/forms/form-validation',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Editor',
        icon: 'clapperboard-edit-line-duotone',
        to: 'https://matdash-vuetify-main.netlify.app/forms/editor',
        chip: 'Pro',
        external: true
    },

    { header: 'Tables' },
    {
        title: 'Tables',
        icon: 'bedside-table-3-outline',
        to: '/tables',
        children: [
            {
                title: 'Basic Table',
                icon: 'tablet-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/tables/basic',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Dark Table',
                icon: 'bedside-table-4-outline',
                to: 'https://matdash-vuetify-main.netlify.app/tables/dark',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Density Table',
                icon: 'bedside-table-3-linear',
                to: 'https://matdash-vuetify-main.netlify.app/tables/density',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Fixed Header Table',
                icon: 'archive-up-minimlistic-broken',
                to: 'https://matdash-vuetify-main.netlify.app/tables/fixed-header',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Height Table',
                icon: 'archive-down-minimlistic-broken',
                to: 'https://matdash-vuetify-main.netlify.app/tables/height',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Editable Table',
                icon: 'document-add-linear',
                to: 'https://matdash-vuetify-main.netlify.app/tables/editable',
                chip: 'Pro',
                external: true
            }
        ]
    },
    {
        title: 'Datatables',
        icon: 'database-linear',
        to: '/tables',
        children: [
            {
                title: 'Basic Table',
                icon: 'database-outline',
                to: 'https://matdash-vuetify-main.netlify.app/tables/datatables/basic',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Header Table',
                icon: 'folder-open-broken',
                to: 'https://matdash-vuetify-main.netlify.app/tables/datatables/header',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Selection Table',
                icon: 'chart-square-broken',
                to: 'https://matdash-vuetify-main.netlify.app/tables/datatables/selection',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Sorting Table',
                icon: 'card-send-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/tables/datatables/sorting',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Pagination Table',
                icon: 'tag-horizontal-broken',
                to: 'https://matdash-vuetify-main.netlify.app/tables/datatables/pagination',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Filtering Table',
                icon: 'tuning-square-2-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/tables/datatables/filtering',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Grouping Table',
                icon: 'tuning-square-2-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/tables/datatables/grouping',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Table Slots',
                icon: 'closet-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/tables/datatables/slots',
                chip: 'Pro',
                external: true
            },
            {
                title: 'CRUD Table',
                icon: 'text-underline-cross-broken',
                to: 'https://matdash-vuetify-main.netlify.app/tables/datatables/crudtable',
                chip: 'Pro',
                external: true
            }
        ]
    },

    { header: 'charts' },
    {
        title: 'Line',
        icon: 'chat-square-2-outline',
        to: 'https://matdash-vuetify-main.netlify.app/charts/line-chart',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Gredient',
        icon: 'round-graph-linear',
        to: 'https://matdash-vuetify-main.netlify.app/charts/gredient-chart',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Area',
        icon: 'graph-up-linear',
        to: 'https://matdash-vuetify-main.netlify.app/charts/area-chart',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Candlestick',
        icon: 'chandelier-broken',
        to: 'https://matdash-vuetify-main.netlify.app/charts/candlestick-chart',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Column',
        icon: 'colour-tuneing-broken',
        to: 'https://matdash-vuetify-main.netlify.app/charts/column-chart',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Doughnut & Pie',
        icon: 'pie-chart-2-linear',
        to: 'https://matdash-vuetify-main.netlify.app/charts/doughnut-pie-chart',
        chip: 'Pro',
        external: true
    },
    {
        title: 'Radialbar & Radar',
        icon: 'radar-2-outline',
        to: 'https://matdash-vuetify-main.netlify.app/charts/radialbar-chart',
        chip: 'Pro',
        external: true
    },
    { header: 'Ui' },
    {
        title: 'Alert',
        icon: 'volume-small-broken',
        to: '/ui/alerts'
    },
    {
        title: 'Button',
        icon: 'tag-horizontal-outline',
        to: '/ui/buttons'
    },
    {
        title: 'Cards',
        icon: 'cardholder-linear',
        to: '/ui/cards'
    },
    {
        title: 'Tables',
        icon: 'suspension-outline',
        to: '/ui/tables'
    },
    {
        title: 'Ui Components',
        icon: 'text-underline-bold',
        to: '/ui',
        children: [
            {
                title: 'Alert',
                icon: 'info-circle-linear',
                to: 'https://matdash-vuetify-main.netlify.app/ui-components/alert',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Accordion',
                icon: 'waterdrops-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/ui-components/accordion',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Avatar',
                icon: 'expressionless-circle-outline',
                to: 'https://matdash-vuetify-main.netlify.app/ui-components/avatar',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Chip',
                icon: 'tag-horizontal-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/ui-components/chip',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Dialog',
                icon: 'bolt-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/ui-components/dialogs',
                chip: 'Pro',
                external: true
            },
            {
                title: 'List',
                icon: 'checklist-bold-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/ui-components/list',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Menus',
                icon: 'menu-dots-circle-outline',
                to: 'https://matdash-vuetify-main.netlify.app/ui-components/menus',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Rating',
                icon: 'shield-star-outline',
                to: 'https://matdash-vuetify-main.netlify.app/ui-components/rating',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Tabs',
                icon: 'box-minimalistic-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/ui-components/tabs',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Tooltip',
                icon: 'transmission-square-outline',
                to: 'https://matdash-vuetify-main.netlify.app/ui-components/tooltip',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Typography',
                icon: 'text-circle-linear',
                to: 'https://matdash-vuetify-main.netlify.app/ui-components/typography',
                chip: 'Pro',
                external: true
            }
        ]
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
    {
        title: 'Auth Pages',
        icon: 'user-check-rounded-broken',
        to: '/auth',
        children: [
            {
                title: 'Error',
                icon: 'bug-minimalistic-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/auth/404',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Side Login',
                icon: 'login-3-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/auth/login',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Boxed Login',
                icon: 'login-3-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/auth/login2',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Side Register',
                icon: 'user-plus-rounded-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/auth/register',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Boxed Register',
                icon: 'user-plus-rounded-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/auth/register2',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Side Forgot Pwd',
                icon: 'password-outline',
                to: 'https://matdash-vuetify-main.netlify.app/auth/forgot-password',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Boxed Forgot Pwd',
                icon: 'password-outline',
                to: 'https://matdash-vuetify-main.netlify.app/auth/forgot-password2',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Side Two Steps',
                icon: 'siderbar-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/auth/two-step',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Boxed Two Steps',
                icon: 'siderbar-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/auth/two-step2',
                chip: 'Pro',
                external: true
            },
            {
                title: 'Maintenance',
                icon: 'settings-line-duotone',
                to: 'https://matdash-vuetify-main.netlify.app/auth/maintenance',
                chip: 'Pro',
                external: true
            }
        ]
    },

    { header: 'Extra' },
    {
        title: 'Tabler Icons',
        icon: 'sticker-smile-circle-2-line-duotone',
        to: '/icons'
    },
    {
        title: 'Solar Icons',
        icon: 'sticker-smile-circle-2-line-duotone',
        to: 'https://matdash-vuetify-main.netlify.app/icons/solar',
        chip: 'Pro',
        external: true
    },
   
];

export default sidebarItem;
