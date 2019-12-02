import React, { Component } from 'react'
import Table from '../components/Table'
import { Link } from 'react-router-dom'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { select } from '../redux/SuppliesActions'

class Ementa extends Component {


    render(props) {
        return (

            <React.Fragment>


                <div className="card">
                    <div className="card-body">


                        <form className="was-validated">
                            <div className="mx-auto">
                                <h1 className="mx-auto">PLANO DE ENSINO DA DISCIPLINA</h1>
                            </div>

                            <div>
                                <h4> Identificacao </h4>

                                <h3 className="mx-auto">disciplina: {this.props.supplies['disciplina']}</h3>

                                <input type="date" className="form-control is-invalid" id="validationServer01" placeholder="ano/periodo" required></input>
                                <div className="invalid-feedback">Preencha com o ano e periodo no formato AAAA/N</div>
                                <input type="text" className="form-control is-invalid" id="validationServer01" placeholder="Professores" required></input>
                                <div className="invalid-feedback">Preencha com os nomes dos professores que vao ministrar a disciplina</div>
                            </div>

                            <div>
                                <h4> Lista de atividades</h4>
                                <Table value={['data', 'descricao', 'carga horaria', 'status']}></Table>
                            </div>

                            <div>
                                <h4> Metodologia de Ensino</h4>
                                <textarea className="form-control is-invalid" id="validationTextarea" placeholder="metodologias" required></textarea>
                                <div className="invalid-feedback">Escreva aqui as metodologias ultilizadas na disciplina</div>
                            </div>

                            <div>
                                <h4> Atividades discentes</h4>
                                <textarea className="form-control is-invalid" id="validationTextarea" placeholder="atividades do discente" required></textarea>
                                <div className="invalid-feedback">Escreva sobre as obrigacoes dos discentes</div>
                            </div>

                            <div>
                                <h4> Sistema de avaliacao</h4>
                                <textarea className="form-control is-invalid" id="validationTextarea" placeholder="sistema de avaliacao" required></textarea>
                                <div className="invalid-feedback">Como vai ser a avaliacao das disciplinas</div>
                            </div>
                            <Link className="btn btn-primary" to="/pdf"> gerar pdf </Link>
                            
                        </form>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}


const mapStateToProps = state => ({ supplies: state.supplies })

export default connect(mapStateToProps)(Ementa)