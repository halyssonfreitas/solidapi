import * as HttpStatus from "http-status";
import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    // public createUserUseCase: CreateUserUseCase
    
    constructor(
        public readonly createUserUseCase: CreateUserUseCase
    ) {
        //this.createUserUseCase = createUserUseCase
        console.log("constructor: " + this.createUserUseCase)
    }
    

    async handle (request: Request, response: Response): Promise<Response> {
        const {name, email, password} = request.body;

        try {
            //const data = {name: name, email: email, password:password}
            await this.createUserUseCase.execute({
                name,
                email,
                password
            })
            return response.status(201).send({funcionou: "ok"});
        } catch (error) {
            console.log(error)
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}