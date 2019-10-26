import React, { Component } from 'react';

class FormGeneric extends Component{
    render(){
        return (
            <React.Fragment>
                    <input class={this.props.typeclass} type={this.props.type} name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                    <label class={this.props.typeclasslabel} for="exampleRadios1">
                        {this.props.name}
                    </label> 
            </React.Fragment>
        )
    }
}

export default FormGeneric