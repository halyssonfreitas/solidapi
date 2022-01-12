import { User } from "../../entities/User"
import { IMailProvider } from "../../providers/IMailProvider"
import { IUsersRepository } from "../../repositories/IUsersRepository"
import { ICreateUserRequestDTO } from "./CreateUserDTO"

export class CreateUserUseCase {

    private usersReporitory: IUsersRepository
    private mailProvider: IMailProvider

    constructor(
        usersReporitory: IUsersRepository,
        mailProvider: IMailProvider
    ) {
        this.usersReporitory = usersReporitory
        this.mailProvider = mailProvider
    }

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersReporitory.findyByEmail(data.email)

        if (userAlreadyExists) {
            throw new Error("User already exists.");
        }

        const user = new User(data)

        await this.usersReporitory.save(user);

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'Equipe do Meu App',
                email: 'equipe@meuapp.com',
            },
            subject: 'Seja bem-vindo à plataforma',
            body: '<p>Você já pode fazer login em nossa plataforma.</p>'
        })
    }
}