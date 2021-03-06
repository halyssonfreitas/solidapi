
interface IAddress {
    email: string
    name: string
}


export interface IMessege {
    from: IAddress
    to: IAddress
    subject: string
    body: string
}

export interface IMailProvider {
    sendMail(message: IMessege): Promise<void>;
}