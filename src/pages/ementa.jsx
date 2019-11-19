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


                <div class="card">
                    <div class="card-body">


                        <form class="was-validated">
                            <div className="mx-auto">
                                <h1 className="mx-auto">PLANO DE ENSINO DA DISCIPLINA</h1>
                            </div>

                            <div>
                                <h4> Identificacao </h4>

                                <h3 class="mx-auto">disciplina: {this.props.supplies['disciplina']}</h3>

                                <input type="date" class="form-control is-invalid" id="validationServer01" placeholder="ano/periodo" required></input>
                                <div class="invalid-feedback">Preencha com o ano e periodo no formato AAAA/N</div>
                                <input type="text" class="form-control is-invalid" id="validationServer01" placeholder="Professores" required></input>
                                <div class="invalid-feedback">Preencha com os nomes dos professores que vao ministrar a disciplina</div>
                            </div>

                            <div>
                                <h4> Lista de atividades</h4>
                                <Table value={['data', 'descricao', 'carga horaria', 'status']}></Table>
                            </div>

                            <div>
                                <h4> Metodologia de Ensino</h4>
                                <textarea class="form-control is-invalid" id="validationTextarea" placeholder="metodologias" required></textarea>
                                <div class="invalid-feedback">Escreva aqui as metodologias ultilizadas na disciplina</div>
                            </div>

                            <div>
                                <h4> Atividades discentes</h4>
                                <textarea class="form-control is-invalid" id="validationTextarea" placeholder="atividades do discente" required></textarea>
                                <div class="invalid-feedback">Escreva sobre as obrigacoes dos discentes</div>
                            </div>

                            <div>
                                <h4> Sistema de avaliacao</h4>
                                <textarea class="form-control is-invalid" id="validationTextarea" placeholder="sistema de avaliacao" required></textarea>
                                <div class="invalid-feedback">Como vai ser a avaliacao das disciplinas</div>
                            </div>
                            <Link to="/pdf">gerar pdf</Link>
                            <input onClick={() => this.props.select()} type="button" value="testar" />
                        </form>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}


const mapStateToProps = state => ({ supplies: state.supplies })
const mapDispatchToProps = dispatch => bindActionCreators({ select }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Ementa)