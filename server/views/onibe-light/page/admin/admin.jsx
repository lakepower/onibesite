"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import UIRouterReact, {UIView} from 'ui-router-react';
import Login from './components/login.jsx';

// Create a new instance of the Router
const router = new UIRouterReact();

router.html5Mode(true);

const basePath = function(path) {
    return '/admin' + path;
};

// Register state
router.stateRegistry.register({
    name: 'home',
    url: basePath('/'),
    component: App
});

router.stateRegistry.register({
    name: 'login',
    url: basePath('/login'),
    component: Login
});

// Start the router
router.start();


ReactDOM.render(
    <UIView/>,
    document.getElementById('root')
);