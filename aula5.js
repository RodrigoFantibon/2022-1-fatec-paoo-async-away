require('dotenv').config()

const axios = require ('axios')
console.log(process.env.APP_KEY)


//---------------------------------------------------
//nao tem haver com a parte de cima
const {v1, v2,v3} = process.env //desistruturação buscando de outra classe
console.log (v1,v2,v3)          //buscando do arquivo .env
//---------------------------------------------