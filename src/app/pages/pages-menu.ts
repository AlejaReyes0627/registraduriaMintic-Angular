import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Login',
    icon: 'shopping-cart-outline',
    link: '/pages/seguridad/login',
    home: true,
  },
  {
    title: 'Candidatos',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Crear',
        link: '/pages/usuario/crear',
      },
      {
        title: 'Listar',
        link: '/pages/usuario/listar',
      }
    ],
  }
];
