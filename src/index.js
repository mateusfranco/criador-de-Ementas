import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider, } from 'react-redux'
import ActivityReducer from './redux/ActivityReducer'

import Ementa from './pages/ementa'
import Menu from './components/Menu'

const reducers = combineReducers({
    activity: ActivityReducer 
})


const root = document.getElementById("root")

ReactDOM.render(
    <Provider store={createStore(reducers)}>
            <div className="row">
                <Menu className="col-4 px-1"></Menu>
                <div className="container">
                    <Ementa></Ementa>
                </div>
            </div>
            
            {/* <Table value={['data','descricao','carga horaria','status']}></Table> */}
    </Provider>
,root)