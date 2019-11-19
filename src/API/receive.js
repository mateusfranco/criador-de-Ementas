import  baseGraphQL  from './gql'
const axios = require("axios")

const getEmenta = (curso, disciplina) => axios({
  url: baseGraphQL,
  method: 'post',
  data: {
    query: `
      {
        findEmentaOne(curso: "${curso}", disciplina: "${disciplina}")
        {
          justificativa
          ementa
          objetivos
          avaliacao
          bibliografia
        }
      }
    `
  }
}).then((result) => {
  console.log(result.data.data.findEmentaOne)
  return (result.data)
});

export default getEmenta;
