import { NbMenuItem } from '@nebular/theme';

// DEMO
export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Accueil',
    icon: 'home-outline',
    link: '/pages/forms/buttons',
    home: true,
  },
  {
    title: 'THÈMES',
    group: true,
  },
  {
    title: 'Transfert de Crédits',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        icon: 'grid-outline',
        children: [
          {
            title: 'Smart Table',
            link: '/pages/tables/smart-table',
          },
          {
            title: 'Tree Grid',
            link: '/pages/tables/tree-grid',
          },
        ],
      },
    ],
  },
  {
    title: 'Communication',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
