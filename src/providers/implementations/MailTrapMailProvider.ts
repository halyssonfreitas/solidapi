import Mail from 'nodemailer/lib/mailer';
import nodemailer from 'nodemailer'
import { IMailProvider, IMessege } from '../IMailProvider'


export class MailTrapMailProvider implements IMailProvider {

    private transport: Mail;

    constructor() {
        this.transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "5503408c3ab1b6",
                pass: "47f73762fc3ce1"
            }
        });
    }


    sendMail(message: IMessege): Promise<void> {
        throw new Error('Method not implemented.');

        this.transport.sendMail({
            to: {
                name : message.to.name,
                address : message.to.email
            },
            from: {
                name : message.from.name,
                address : message.from.email
            },
            subject: message.subject,
            html: message.body,
        })
    }

}