const nodemailer = require('nodemailer');

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendMail(to) {
        try{
            await this.transporter.sendMail({
                from: "https://send-emails-list.onrender.com",
                to,
                subject: 'Активація аккаунта на ' + process.env.API_URL,
                text: '',
                html:
                    `
                        <div>
                            <h1>Розсилка від Batyanoskow</h1>
                        </div>
                    `
            })
        }
        catch(e){
            console.log(e)
        }
        
    }
}

module.exports = new MailService();
