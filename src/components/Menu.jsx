import React, { Component } from 'react'
import { FaRegFileAlt } from "react-icons/fa";

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Menu extends Component{
    state = {

    }

    teste = (e) => {
        console.log(e);
    }

    render( props ){
        return (
            <React.Fragment>
            
                <SideNav>
                    <SideNav.Nav>
                        <NavItem >
                            <NavIcon>
                                <FaRegFileAlt/>
                            </NavIcon>
                            <NavText>
                                engenharia de software
                            </NavText>
                            {this.props.engsoft.map((e)=>{
                                return <NavItem onClick={() => this.teste(e)}>
                                    <NavText>{e}</NavText>
                                </NavItem>
                            })}
                        </NavItem>
                    </SideNav.Nav>            
                </SideNav>
                
            </React.Fragment>
        )
    }
}

export default Menu