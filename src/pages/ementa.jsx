import React, { Component } from 'react'
import  Table  from '../components/Table'


class Ementa extends Component{
    state = {
        curso: "",
        ano: "",
        professores: "",

    }

    render(){
        return (
            <div>
                <form class="was-validated">
                <div className="mx-auto">
                    <h1 className="mx-auto">PLANO DE ENSINO DE DISCIPLINA</h1>
                </div>
                
                <div>
                    <h4> 1. Identificacao </h4>
                    <input type="text" class="form-control is-invalid" id="validationServer01" placeholder="Curso" required></input>
                    <div class="invalid-feedback">Preencha com o curso que vai disponibilizar essa disciplina</div>
                    <input type="text" class="form-control is-invalid" id="validationServer01" placeholder="ano/periodo" required></input>
                    <div class="invalid-feedback">Preencha com o ano e periodo no formato AAAA/N</div>
                    <input type="text" class="form-control is-invalid" id="validationServer01" placeholder="Professores" required></input>
                    <div class="invalid-feedback">Preencha com os nomes dos professores que vao ministrar a disciplina</div>
                </div>

                <div>
                    <h4> 2.X Justificativa </h4>
                    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="justificativa para a disciplina" required></textarea>
                    <div class="invalid-feedback">Escreva aqui um pequeno texto sobre porque a necessidade da disciplina para os graduandos</div>
                </div>

                <div>
                    <h4> 3.X Ementa</h4>
                    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Ementa" required></textarea>
                    <div class="invalid-feedback">Escreva aqui os principais conceitos ensinados na disciplina</div>
                </div>

                <div>
                    <h4> 4.X Objetivos gerais e especificos</h4>
                    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="objetivos" required></textarea>
                    <div class="invalid-feedback">Escreva aqui os principais objetivos da disciplina</div>
                </div>
                <div>
                    <h4> 5. Lista de atividades</h4>
                    <Table value={['data','descricao','carga horaria','status']}></Table>
                </div>
                <div>
                    <h4> 6. Metodologia de Ensino</h4>
                    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="metodologias" required></textarea>
                    <div class="invalid-feedback">Escreva aqui as metodologias ultilizadas na disciplina</div>
                </div>

                <div>
                    <h4> 7. Atividades discentes</h4>
                    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="atividades do discente" required></textarea>
                    <div class="invalid-feedback">Escreva sobre as obrigacoes dos discentes</div>
                </div>

                <div>
                    <h4> 8.(pode mudar menos o texto) Sistema de avaliacao</h4>
                    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="sistema de avaliacao" required></textarea>
                    <div class="invalid-feedback">Como vai ser a avaliacao das disciplinas</div>
                </div>
                
                <div>
                    <h4> 9.X Bibliografia Basica e Complemetar</h4>
                    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="bibliografia da disciplina" required></textarea>
                    <div class="invalid-feedback">Escreva aqui a bibliografia da disciplina</div>
                </div>

                <div>
                    <h4> 10. Parecer</h4>
                </div>

                <input type="submit" value="gerar pdf"/>
                </form>
            </div>
        )
    }
}

export default Ementa