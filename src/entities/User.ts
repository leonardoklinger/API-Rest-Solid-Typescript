import { uuid } from "uuidv4"

export class User {
    public readonly id: string
    public name: string
    public email: string
    public password: string

    constructor(props: Omit<User, "id">, id?: string) { //Vai receber tudo menos ID
        Object.assign(this, props)//Vai pegar tudo e instanciar

        if(!id) {
            this.id = uuid()
        }
    }
}