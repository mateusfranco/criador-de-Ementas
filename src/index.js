import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'
import Pdf from './pages/EmentaPDF'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import { combineReducers, createStore } from 'redux'
import { Provider, } from 'react-redux'
import ActivityReducer from './redux/ActivityReducer'
import SuppliesReducer from './redux/SuppliesReducer'
import MenuReducer from './redux/MenuReducer'

const root = document.getElementById("root")

const reducers = combineReducers({
    activity: ActivityReducer,
    supplies: SuppliesReducer,
    disciplinas: MenuReducer,
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/pdf" render={(props) => <Pdf {...props} />} />
            </Switch>
        </BrowserRouter>
    </Provider>
,root)