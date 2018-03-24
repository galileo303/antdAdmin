import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import { LocaleProvider, Spin } from 'antd';
import { persistStore, REHYDRATE } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import dynamic from 'dva/dynamic';
import DynamicRoute from './core/dynamicRoute.core';
// import { getRouterData } from './common/router';
import Authorized from './utils/Authorized';
import styles from './index.less';


const { ConnectedRouter } = routerRedux;
const { AuthorizedRoute } = Authorized;

const Loading = <Spin size="large" className={styles.globalSpin} />;
dynamic.setDefaultLoadingComponent(() => Loading);

const createPersistor = (store) => {
  const persistor = persistStore(store);
  // hmr时，如果不dispatch REHYDRATE，会导致
  // PersistGate的子元素不渲染，页面展示空白
  persistor.dispatch({
    type: REHYDRATE,
  });
  return persistor;
};

function RouterConfig({ history, app }) {
  const DR = DynamicRoute.getInstence(app);
  const routerData = DR.getRouterData();
  // const routerData = getRouterData(app);

  const UserLayout = routerData['/user'].component;
  const BasicLayout = routerData['/'].component;
  return (
    <PersistGate persistor={createPersistor(app._store)} loading={Loading}>
      <LocaleProvider locale={zhCN}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route
              path="/user"
              component={UserLayout}
            />
            <AuthorizedRoute
              path="/"
              render={props => <BasicLayout {...props} />}
              authority={['admin', 'user']}
              redirectPath="/user/login"
            />
          </Switch>
        </ConnectedRouter>
      </LocaleProvider>
    </PersistGate>
  );
}

export default RouterConfig;
