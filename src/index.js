import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import  {Home}  from './components/Home'
import { BaseLayout } from './components/BaseLayout'
import {SignUp} from './components/SignUp'
import {StudentSignUp} from './components/StudentSignUp'
import {TeacherLoginPage} from './components/TeacherLoginPage'
import {TeacherWelcome} from './components/TeacherWelcome'
import {ReactFileUpload} from './components/ReactFileUpload'
import {StudentLoginPage} from './components/StudentLoginPage'
import {StudentWelcome} from './components/StudentWelcome'
import StudentSavedVideos from './components/StudentSavedVideos'
import {LoginPage} from './components/LoginPage'
import {DisplayVideos} from './components/DisplayVideos'
import MoreInfoScreen from './components/MoreInfoScreen'
import WatchVideo from './components/WatchVideo'



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

        <Route path = '/WatchVideo' component = {WatchVideo}/>
        <Route path = '/MoreInfoScreen' component = {MoreInfoScreen}/>
        <Route path = '/DisplayVideos' component= {DisplayVideos} />
        <Route path = '/LoginPage' component= {LoginPage} />
        <Route path = '/StudentSavedVideos' component= {StudentSavedVideos} />
        <Route path = '/StudentLoginPage' component= {StudentLoginPage} />
        <Route path = '/TeacherLoginPage' component= {TeacherLoginPage} />
        <Route path = '/ReactFileUpload' component= {ReactFileUpload} />
        <Route path = '/TeacherWelcome' component= {TeacherWelcome} />
        <Route path = '/StudentWelcome' component= {StudentWelcome} />
        <Route path = '/StudentSignUp' component= {StudentSignUp} />
        <Route path = '/SignUp' component= {SignUp} />
        <Route path = '/' component= {Home} />

      </Switch>
    </BaseLayout>
  </Provider>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
