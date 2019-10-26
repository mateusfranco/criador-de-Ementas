import React, { Component } from 'react'

import FormGeneric from './FormGeneric'

class Menu extends Component{
    state = {

    }

    render(){
        return (
            <div>
                <div class="card shadow-sm p-3 mb-5 bg-white rounded">
                    <div class="card-body">
                        <div className="form-check">
                            <FormGeneric  type="radio" typeclass="form-check-input" typeclasslabel="form-check-label" name="FUP"></FormGeneric>
                        </div>
                        <div className="form-check">
                            <FormGeneric  type="radio" typeclass="form-check-input" typeclasslabel="form-check-label" name="Etica"></FormGeneric>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu