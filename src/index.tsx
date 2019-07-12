import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';

import { LocaleProvider } from 'antd';
import * as Routes from 'route/index';
import LazyIng from 'components/Lazy';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import './utils/widow'
// import 'utils/ts'
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

ReactDOM.render((
  <LocaleProvider locale={zh_CN}>
    <BrowserRouter> {/* basename="demourl" */}
      <Switch>
        <LazyIng>
          <Routes.Home />
          <Routes.User />
          <Routes.Login />
          <Routes.Error />
        </LazyIng>
        <Redirect from="/*" to="/404" />
      </Switch>
    </BrowserRouter>
  </LocaleProvider>
), document.getElementById('root'));

// serviceWorker.unregister();
