import {Router} from "express"

const router = Router()

router.post('/users', (request, reponse) => {
    reponse.status(201).send()
})

export {router}