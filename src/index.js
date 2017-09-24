import React, { Component } from 'react';
import { render } from 'react-dom';

import './index.css';
import App from './App';
import TitleBar from './title-bar/TitleBar';
import SignUp from './sign/SignUp';
import SignIn from './sign/SignIn';
import Comment from './comment/CommentPanel';

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