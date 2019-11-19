import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider, } from 'react-redux'
import ActivityReducer from '../redux/ActivityReducer'
import SuppliesReducer from '../redux/SuppliesReducer';

import Ementa from '../pages/ementa'
import Menu from '../components/Menu'

const reducers = combineReducers({
    activity: ActivityReducer,
    supplies: SuppliesReducer
})


export default ()=>(
    <Provider store={createStore(reducers)}>
            <div className="row">
                <Menu className="col-4 px-1" engsoft={["teste1","teste2","teste3"]} />
                <div className="container">
                    <Ementa></Ementa>
                </div>
            </div>
    </Provider>
)
