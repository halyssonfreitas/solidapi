import { uuid } from 'uuidv4'

export class User {

    public readonly id: string;

    public name: string;
    public email: string;
    public password: string;

    constructor(props: Omit<User, 'id'>, id?: string) {
        // O objeto props copia tudas as suas propriedades
        //para as respectivas propriedades de this
        Object.assign(this, props)

        // O objetivo é não deixar a responsabilidade de geração de ID para o banco
        // mas  sim para a aplicação
        if (!id){
            this.id = uuid();
        }
        
    }
}