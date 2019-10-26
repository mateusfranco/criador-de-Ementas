import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { rem } from '../redux/ActivityActions'
import './Activity.css'


class Activity extends Component {

    state = {
        status: 0 
    }

    changeStatus = () => {
        const lenStatus = 5
        var newStatus = this.state.status + 1
        newStatus %= lenStatus 
        this.setState({
            status: newStatus
        })
        console.log(this.state.status)
    }

    remover = () => {

    }

    render() {
        let classname
        switch (this.state.status) {
            case 0:
                classname = "outraAtividade"
                break;
            case 1:
                classname = "feriado"
                break;
            case 2:
                classname = "prova"
                break;
            case 3:
                classname = "trabalho"
                break;
            default:
                classname = ""
                break; 
        }

        classname += " badge badge-secondary"
        return(
            
            <tr>
                <td>
                    <input className="form-control is-invalid" placeholder="data" type="text" name="" id=""/>
                </td>
                <td>
                    <input className="form-control is-invalid" placeholder="atividade" type="text" name="" id=""/>
                </td>
                <td>
                    <input className="form-control is-invalid" placeholder="duracao" type="text" name="" id=""/>
                </td>
                <td>
                    <span className={classname}>O</span>
                </td>
                <td>
                    <input onClick={this.changeStatus} type="button" value="mudarStatus"/>
                </td>
                <td>
                    <input id={this.props.id} onClick={this.props.rem} type="button" value="remover"/>
                </td>
            </tr>
        )    
    }
}

const mapStateToProps = state => ({ activity: state.activity })
const mapDispatchToProps = dispatch => bindActionCreators({rem}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Activity)


