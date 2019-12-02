import React from 'react'

import Ementa from '../pages/ementa'
import Menu from '../components/Menu'



export default ()=>(
    // <Provider store={createStore(reducers)}>
            <div className="row">
                <Menu className="col-4 px-1" engsoft={["teste1","teste2","teste3"]} />
                <div className="container">
                    <Ementa></Ementa>
                </div>
            </div>
    // </Provider>
)
