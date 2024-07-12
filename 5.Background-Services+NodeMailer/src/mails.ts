import { error, info } from "console"
import "dotenv/config"
import nodemailer from 'nodemailer'
// for 2FA use https://nodemailer.com/usage/using-gmail/ to create app password

const mailFunction = (to: string, subject: string, text: string) => {
    /*to: the email of the receiver    
    * from : Recipient address (process.env.EMAIL)
    * subject: subject of the email
    * text: the body of the email 
    */

    // transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,  // Your Gmail address
            pass: process.env.PASSWORD  // Your Gmail password or application-specific password(for 2FA use https://nodemailer.com/usage/using-gmail/ to create app password)
        }
    })
    const mailOptions = { from: process.env.EMAIL, to, subject, text }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log(`Email sent: ${info.response}`)
        }
    })


}

export default mailFunction;