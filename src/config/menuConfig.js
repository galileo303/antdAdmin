/*
@param       |   作用        |  是否必须  |    类型
  name       |   菜单名称     |   Y       |   string
  icon       |   菜单icon    |   N       |   string
  path       |   路径        |   Y       |   sting
  children   |   子菜单       |   N       |   json
  authority  |   权限字段     |   N       |   array
  hideInMenu |  是否隐藏      |   N       |   boolean
*/
export const menuData = [

  {
    name: '保单查询',
    icon: 'form',
    path: 'dashboard',
    children: [{
      name: '赔保查询1',
      path: 'search1',
      authority: ['user', 'admin'],
    }, {
      name: '赔保查询2',
      path: 'search2',
      authority: ['user', 'admin'],
    },
    {
      name: '赔保查询3',
      path: 'search3',
      authority: ['user', 'admin'],
    },
    {
      name: '赔保查询4',
      path: 'search4',
      authority: ['user', 'admin'],
    },
    ],
  },
  {
    name: '审核查询',
    icon: 'form',
    path: 'dashboard2',
    children: [{
      name: '审核查询1',
      path: 'search5',
      authority: ['user', 'admin'],
    }, {
      name: '审核查询2',
      path: 'search6',
      authority: ['user', 'admin'],
    },
    {
      name: '审核查询3',
      path: 'search7',
      authority: ['user', 'admin'],
    },
    {
      name: '审核查询4',
      path: 'search8',
      authority: ['user', 'admin'],
    },
    ],
  },

];


// name: 'dashboard',
//   icon: 'dashboard',
//     path: 'dashboard',
//       children: [{
//         name: '分析页',
//         path: 'analysis',
//         authority: ['user', 'admin'],
//       }, {
//         name: '监控页',
//         path: 'monitor',
//       }, {
//         name: '工作台',
//         path: 'workplace',
//         // hideInMenu: true,
//       }],
// }, {
//   name: '表单页',
//     icon: 'form',
//       path: 'form',
//         children: [{
//           name: '基础表单',
//           path: 'basic-form',
//         }, {
//           name: '分步表单',
//           path: 'step-form',
//         }, {
//           name: '高级表单',
//           authority: 'admin',
//           path: 'advanced-form',
//         }],
// }, {
//   name: '列表页',
//     icon: 'table',
//       path: 'list',
//         children: [{
//           name: '查询表格',
//           path: 'table-list',
//         }, {
//           name: '标准列表',
//           path: 'basic-list',
//         }, {
//           name: '卡片列表',
//           path: 'card-list',
//         }, {
//           name: '搜索列表',
//           path: 'search',
//           children: [{
//             name: '搜索列表（文章）',
//             path: 'articles',
//           }, {
//             name: '搜索列表（项目）',
//             path: 'projects',
//           }, {
//             name: '搜索列表（应用）',
//             path: 'applications',
//           }],
//         }],
// }, {
//   name: '详情页',
//     icon: 'profile',
//       path: 'profile',
//         children: [{
//           name: '基础详情页',
//           path: 'basic',
//         }, {
//           name: '高级详情页',
//           path: 'advanced',
//           authority: 'admin',
//         }],
// }, {
//   name: '结果页',
//     icon: 'check-circle-o',
//       path: 'result',
//         children: [{
//           name: '成功',
//           path: 'success',
//         }, {
//           name: '失败',
//           path: 'fail',
//         }],
// }, {
//   name: '异常页',
//     icon: 'warning',
//       path: 'exception',
//         children: [{
//           name: '403',
//           path: '403',
//         }, {
//           name: '404',
//           path: '404',
//         }, {
//           name: '500',
//           path: '500',
//         }, {
//           name: '触发异常',
//           path: 'trigger',
//           hideInMenu: true,
//         }],
// }, {
//   name: '账户',
//     icon: 'user',
//       path: 'user',
//         authority: 'guest',
//           children: [{
//             name: '登录',
//             path: 'login',
//           }, {
//             name: '注册',
//             path: 'register',
//           }, {
//             name: '注册结果',
//             path: 'register-result',
//           }],
