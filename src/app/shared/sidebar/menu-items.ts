import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: []
  },

  
  {
    path: '/projects', // Correct path
    title: 'Projets',
    icon: 'bi bi-briefcase',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/categories', // New path for categories
    title: 'Catégories',
    icon: 'bi bi-tags',
    class: '',
    extralink: false,
    submenu: []
  }
 
];
