
export const routeConfigs = [
  {
    path: '/',
    component: () => import('../layouts/BasicLayout'),
    models: ['user', 'login'],
  },
  {
    path: '/dashboard/analysis',
    component: () => import('../view/Dashboard/Analysis'),
    models: ['chart'],

  },
  {
    path: '/dashboard/monitor',
    component: () => import('../view/Dashboard/Monitor'),
    models: ['monitor'],
  },
  {
    path: '/dashboard/workplace',
    component: () => import('../view/Dashboard/Workplace'),
    models: ['project', 'activities', 'chart'],
  },
  {
    path: '/form/basic-form',
    component: () => import('../view/Forms/StepForm'),
    models: ['form'],
  },
  {
    path: '/form/basic-form/info',
    component: () => import('../view/Forms/StepForm/Step1'),
    models: ['form'],
  },
  {
    path: '/form/basic-form/confirm',
    component: () => import('../view/Forms/StepForm/Step2'),
    models: ['form'],
  },
  {
    path: '/user',
    component: () => import('../layouts/UserLayout'),
    models: [],
  },
  {
    path: '/user/login',
    component: () => import('../view/User/Login'),
    models: ['login'],
  },
];
