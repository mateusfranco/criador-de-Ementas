import getDisciplina from '../API/getDisciplina'

const INITAL_STATE = { 
    disciplinas:[]
}

export default function(state = INITAL_STATE, action){
    console.log("payload= " + action.payload)

    let disciplinas = state.disciplinas
    disciplinas = action.payload
    if(disciplinas == undefined) return [] 
    else return disciplinas
}