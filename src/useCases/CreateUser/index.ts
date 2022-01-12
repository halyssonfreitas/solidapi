import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { FakeUsersRepository } from "../../repositories/implementations/FakeUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const fakeUsersRepository = new FakeUsersRepository();
const mailTrapMailProvider = new MailTrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
    fakeUsersRepository,
    mailTrapMailProvider,
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export {createUserUseCase , createUserController}
