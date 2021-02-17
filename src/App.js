import React, { Component } from 'react';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';
/* import './statics/iconfont/iconfont.css'; */

/*import {Globalstyle} from'./style'; */
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';

class App extends Component {
  render() {
    {/* <Globalstyle></Globalstyle>
      <Iconfont></Iconfont> */}
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            {/* <Route path='/' exact render={() => <div>home</div>}></Route>
            <Route path='/detail' exact render={() => <div>detail</div>}></Route> */}
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
