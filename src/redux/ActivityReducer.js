import React from 'react'
import Activity from "../components/Activity";

const INITIAL_STATE = { activitys: []}
let cont = 0;

export default function(state = INITIAL_STATE, action){
    let aux = state.activitys
    switch(action.type){
        case 'ADD':
            aux.push(<Activity id={cont++}></Activity>)            
            return {...state, activitys: aux}
        case 'REM':
            for (let index = 0; index < aux.length; index++) {
                if(aux[index] && aux[index].props.id == action.payload){
                    delete aux[index]
                    break    
                } 
            }
            return {...state, activitys: aux}
        default :
            return state
    }
}