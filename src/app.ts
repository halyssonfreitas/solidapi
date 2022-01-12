import express from 'express'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(router)

// Coisa minha
//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended : false }))


// named export, diferente do default export, ajuda o VS code nas referências em outros arquivos, sendo mais rápido
export {app}