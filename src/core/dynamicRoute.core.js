import { createElement } from 'react';
import dynamic from 'dva/dynamic';
import pathToRegexp from 'path-to-regexp';
import { getMenuData } from './menu';
import * as routesConf from '../config/routeConfig';

class DynamicRoute {
     routerDataCache;
     constructor(app) {
       this.app = app;
     }

    modelNotExisted = (model) => {
      return (
      // eslint-disable-next-line
            !this.app._models.some(({ namespace }) => {
          return namespace === model.substring(model.lastIndexOf('/') + 1);
        })
      );
    }

  // wrapper of dynamic
   dynamicWrapper = (models, component) => {
     // () => require('module')
     // transformed by babel-plugin-dynamic-import-node-sync
     if (component.toString().indexOf('.then(') < 0) {
       models.forEach((model) => {
         if (this.modelNotExisted(model)) {
           // eslint-disable-next-line
                  this.app.model(require(`../models/${model}`).default);
         }
       });
       return (props) => {
         if (!this.routerDataCache) {
           this.routerDataCache = this.getRouterData(this.app);
         }
         return createElement(component().default, {
           ...props,
           routerData: this.routerDataCache,
         });
       };
     }
     // () => import('module')
     const apps = this.app || {};
     return dynamic({
       apps,
       models: () => models.filter(
         model => this.modelNotExisted(model)).map(m => import(`../models/${m}.js`)
       ),
       // add routerData prop
       component: () => {
         if (!this.routerDataCache) {
           this.routerDataCache = this.getRouterData(apps);
         }
         return component().then((raw) => {
           const Component = raw.default || raw;
           return props => createElement(Component, {
             ...props,
             routerData: this.routerDataCache,
           });
         });
       },
     });
   };

    getFlatMenuData=(menus) => {
      let keys = {};
      menus.forEach((item) => {
        if (item.children) {
          keys[item.path] = { ...item };
          keys = { ...keys, ...this.getFlatMenuData(item.children) };
        } else {
          keys[item.path] = { ...item };
        }
      });
      return keys;
    }

  getRouterData = () => {
    const routerConfig = {};
    routesConf.routeConfigs.map((v) => {
      return Object.assign(routerConfig, {
        [v.path]: { component: this.dynamicWrapper(v.models, v.component) },
      });
    });
    const menuData = this.getFlatMenuData(getMenuData());

    // Route configuration data
    // eg. {name,authority ...routerConfig }
    const routerData = {};
    // The route matches the menu
    Object.keys(routerConfig).forEach((path) => {
      // Regular match item name
      // eg.  router /user/:id === /user/chen
      const pathRegexp = pathToRegexp(path);
      const menuKey = Object.keys(menuData).find(key => pathRegexp.test(`${key}`));
      let menuItem = {};
      // If menuKey is not empty
      if (menuKey) {
        menuItem = menuData[menuKey];
      }
      let router = routerConfig[path];
      // If you need to configure complex parameter routing,
      // https://github.com/ant-design/ant-design-pro-site/blob/master/docs/router-and-nav.md#%E5%B8%A6%E5%8F%82%E6%95%B0%E7%9A%84%E8%B7%AF%E7%94%B1%E8%8F%9C%E5%8D%95
      // eg . /list/:type/user/info/:id
      router = {
        ...router,
        name: router.name || menuItem.name,
        authority: router.authority || menuItem.authority,
      };
      routerData[path] = router;
    });
    return routerData;
  };

  static getInstence(app) {
    if (!DynamicRoute.instence) {
      DynamicRoute.instence = new DynamicRoute(app);
    }
    return DynamicRoute.instence;
  }
}
export default DynamicRoute;
