import  getEmenta from '../API/receive'


const INITAL_STATE = { supplies:{
        curso: "",
        disciplina: "",
        metodologia: "",
        atividades: "",
        avaliacao: ""
    }
}

export default function(state = INITAL_STATE, action){
    let supplies = state.supplies
    switch(action.type){
        case 'SEL':
            //aqui vou ter que ir no servidor e pegar as informacoes reais
            let aux = getEmenta("teste","teste2")
            
            supplies['curso'] = "teste"
            supplies['disciplina'] = "teste2"
            supplies['atividades'] = aux['atividades']
            supplies['metodologia'] = aux['metodologia']
            supplies['avaliacao'] = aux['avaliacao']

            return supplies
        case 'ALL':
        
            return supplies
        default : 
            return state;
    }
}