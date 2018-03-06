import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import  {Home}  from './components/Home'
import { BaseLayout } from './components/BaseLayout'
import {SignUp} from './components/SignUp'
import {LoginPage} from './components/LoginPage'
import {TeacherWelcome} from './components/TeacherWelcome'
import {ReactFileUpload} from './components/ReactFileUpload'


import { createStore, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <BrowserRouter>
  <Provider store = {store}>
    <BaseLayout>
      <Switch>

        <Route path = '/ReactFileUpload' component= {ReactFileUpload} />
        <Route path = '/TeacherWelcome' component= {TeacherWelcome} />
        <Route path = '/LoginPage' component= {LoginPage} />
        <Route path = '/SignUp' component= {SignUp} />
        <Route path = '/' component= {Home} />

      </Switch>
    </BaseLayout>
  </Provider>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
