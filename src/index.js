import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'
import Pdf from './pages/EmentaPDF'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


const root = document.getElementById("root")

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/pdf" component={Pdf} />
        </Switch>
    </BrowserRouter>
,root)