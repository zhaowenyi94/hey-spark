import React, { Component } from '../../../node_modules/react';
import { render } from '../../../node_modules/react-dom';

import '../css/index.css';
import App from './App';
import TitleBar from './Title/TitleBar';
import SignUp from './Sign-In-Up/SignUp';
import SignIn from './Sign-In-Up/SignIn';
import Comment from './Comment/CommentPanel';

import { HashRouter, Router, Route, hashHistory } from 'react-router-dom'


// 配置路由 (Provider 是一个react组件，提供一个全局的store使得所有的组件都可以使用)
render((
    <div>
        <HashRouter>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
                <Route path="/comment" component={Comment} />
            </div>
        </HashRouter>
    </div>
),document.getElementById('title-bar'));