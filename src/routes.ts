import {response, Router} from "express"
import { createUserController } from "./useCases/CreateUser"

const router = Router()

router.post('/users', (request, reponse) => {
    return createUserController.handle(request, response);
})

export {router}