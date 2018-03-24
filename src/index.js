import '@babel/polyfill';
import 'url-polyfill';
import dva from 'dva';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createHistory from 'history/createHashHistory';
// user BrowserHistory
// import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import 'moment/locale/zh-cn';
import './rollbar';

import './index.less';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['global', 'user'],
};

// 1. Initialize
const app = dva({
  // 增加本地持久化
  onReducer: rootReducer => persistReducer(persistConfig, rootReducer),
  history: createHistory(),
});

// 2. Plugins
app.use(createLoading());

// 3. Register global model
app.model(require('./models/global').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

export default app._store;  // eslint-disable-line
