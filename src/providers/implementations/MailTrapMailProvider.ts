import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer";

export class MailTrapMailProvider implements IMailProvider {
    private transporter: Mail

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.HOST,
            port: 2525,
            auth: {
                user: process.env.USER,
                pass: process.env.PASSWORD
            }
        })
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },

            from: {
                name: message.from.name,
                address: message.from.email
            },

            subject: message.subject,
        
            html: message.body
        })
    }
}