import getEmenta from '../API/getEmenta'

const INITAL_STATE = { 
    supplies:{
        curso: "",
        disciplina: "",
        metodologia: "",
        atividades: "",
        avaliacao: ""
    }
}

export default function(state = INITAL_STATE, action){
    

    switch(action.type){
        case 'SEL':
            let supplies = state.supplies
            if(supplies == undefined){
                supplies = {
                                curso: "",
                                disciplina: "",
                                metodologia: "",
                                atividades: "",
                                avaliacao: ""
                            } 
            }
            let aux = getEmenta(action.payload.curso,action.payload.disciplina)
            console.log(action.payload.curso + action.payload.disciplina)
            supplies['curso'] = action.payload.curso
            supplies['disciplina'] = action.payload.disciplina
            supplies['atividades'] = aux['atividades']
            supplies['metodologia'] = aux['metodologia']
            supplies['avaliacao'] = aux['avaliacao']
            return supplies
        case 'ALL':
            return state
        default : 
            return state
    }
}