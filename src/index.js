import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';

import { LocaleProvider } from 'antd';
import * as Route from '@/route/index';
import LazyIng from '@/components/Lazy';

import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import './utils/widow'
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

ReactDOM.render((
  <LocaleProvider locale={zh_CN}>
    <BrowserRouter>
      <Switch>
        <Redirect exact from='/' to='/home'/>
        <LazyIng>
          <Route.Home />
        </LazyIng>
      </Switch>
    </BrowserRouter>
  </LocaleProvider>
), document.getElementById('root'));

// serviceWorker.unregister();
