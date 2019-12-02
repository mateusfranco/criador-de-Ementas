import  baseGraphQL  from './gql'
const axios = require("axios")

const getDisciplina = () => axios({
  url: baseGraphQL,
  method: 'post',
  data: {
    query: `
    {
        findDisciplina(input:{

        }){
            nome,
            curso
        }
    }
    `
  }
})

export default getDisciplina;
