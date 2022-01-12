import express from 'express'
import { router } from './routes'

const app = express()


app.use(express.json())
app.use(router)


// named export, diferente do default export, ajuda o VS code nas referências em outros arquivos, sendo mais rápido
export {app}