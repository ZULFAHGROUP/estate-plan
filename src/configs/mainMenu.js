import pages from '../pages';

const MainMenu = [
  {
    label: 'Home',
    component: pages.Home,
    path: '/',
    exact: true
  },
  {
    label: 'Estate Plans',
    component: pages.Gallery,
    path: '/estate-plans',
    exact: true
  },
  {
    label: 'Logout',
    component: pages.Logout,
    path: '/logout'
  },
];

export default MainMenu;
