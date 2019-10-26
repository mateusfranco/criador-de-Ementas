import React, {Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { add } from '../redux/ActivityActions'


class Table extends Component{  
    render(props){
        return(
            <div>
                <table className="table">
                    <thead>
                        <tr>
                        {  
                            this.props.value.map((e) => {
                                return <th>{e}</th>
                            })
                        }
                        </tr>
                    </thead>
                    <tbody>
                        <React.Fragment>
                            {this.props.activity.activitys}
                        </React.Fragment>
                            
                    </tbody>
                </table>
                <input onClick={this.props.add} type="button" value="adicionar atividade"/>
                <label className="px-5"> Numero de Horas </label>
            </div>
        )
    }
}

const mapStateToProps = state => ({ activity: state.activity })
const mapDispatchToProps = dispatch => bindActionCreators({add}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Table)
