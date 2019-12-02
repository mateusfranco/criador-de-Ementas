import React, { Component } from 'react'
import { FaRegFileAlt } from "react-icons/fa";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './Menu.css'

import { getAll } from '../redux/MenuActions'
import { select } from '../redux/SuppliesActions'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getDisciplina from '../API/getDisciplina'

class Menu extends Component{
    state = {
        disciplinas: [], 
        cursos: []
    }


    componentDidMount(){
        getDisciplina().then((result) => {
            result = result.data.data.findDisciplina
            console.log(result)

            let aux = []
            for(let i in result){
                aux.push({dis: result[i]["nome"],cur: result[i]["curso"] })
            }

            let cursos = []
            for(let i in result){
                if(!cursos.includes(result[i]["curso"])) cursos.push(result[i]["curso"])
            } 
            console.log("cursos "+ cursos)
            
            this.setState({disciplinas: aux, cursos: cursos})
            this.props.getAll(aux)
        });
    }
    
    render( props ){
        

        return (
            <React.Fragment>
                <SideNav onSelect={(selected) => {
                    console.log("selecionou " + selected)
                    const curso = selected.split("|")[0]
                    const disciplina = selected.split("|")[1]
                    this.props.select({curso: curso, disciplina: disciplina})
                    }}>

                    <SideNav.Toggle/>
                    <h5 className="label">cursos</h5>
                    
                    <SideNav.Nav>
                        {
                            this.state.cursos.map(a=>{
                            return <NavItem >
                                

                                <NavIcon>
                                    <FaRegFileAlt/>
                                </NavIcon>
                                <NavText>
                                    {a}    
                                </NavText>
                                    {
                                        console.log("disciplinas = " + this.props.dis)
                                    }
                                    {
                                    this.props.dis.map(e=>{
                                        if(e.cur == a)  
                                            return <NavItem eventKey={a + "|" + e.dis}>
                                                <NavText>{e.dis}</NavText>
                                            </NavItem>
                                    })
                                    }
                                
                            
                            </NavItem>
                            })
                        }
                    </SideNav.Nav>            
                </SideNav>
                
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({ dis: state.disciplinas })
const mapDispatchToProps = dispatch => bindActionCreators({ getAll, select }, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(Menu)