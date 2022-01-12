import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class FakeUsersRepository implements IUsersRepository{

    private users: User[] = [];

    async findyByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email === email)

        return user;
    }
    async save(user: User): Promise<void> {
        this.users.push(user);
    }

}