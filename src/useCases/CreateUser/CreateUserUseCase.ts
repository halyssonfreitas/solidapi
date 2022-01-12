import { User } from "../../entities/User"
import { IUsersRepository } from "../../repositories/IUsersRepository"
import { ICreateUserRequestDTO } from "./CreateUserDTO"

export class CreateUserUseCase {

    private usersReporitory: IUsersRepository

    constructor(
        usersReporitory: IUsersRepository
    ) {
        this.usersReporitory = usersReporitory
    }

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersReporitory.findyByEmail(data.email)

        if (userAlreadyExists) {
            throw new Error("User already exists.");
        }

        const user = new User(data)

        await this.usersReporitory.save(user);
    }
}