import LogoutIcon from '@/assets/assets-slide-logout.svg';

export default [
  {
    path: '/loginRedirect',
    name: 'loginRedirect',
    meta: { title: '登录页', icon: LogoutIcon },
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        path: 'index',
        redirect: '/login',
        component: () => import('@/layouts/blank.vue'),
        meta: { title: '登录中心' },
      },
    ],
  },
];
