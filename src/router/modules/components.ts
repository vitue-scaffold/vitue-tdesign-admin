import Layout from '@/layouts';

export default [
  {
    path: '/result',
    name: 'result',
    component: Layout,
    redirect: '/result/success',
    meta: { title: '结果页', icon: 'check-circle' },
    children: [
      {
        path: 'success',
        name: 'resultSuccess',
        component: () => import('@/pages/result/success/index.vue'),
        meta: { title: '成功页' },
      },
    ],
  },
];
