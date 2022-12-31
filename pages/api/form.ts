// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'


type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    console.log(req.body)
    console.log(req.query)

    const text = `
        NOUVEAU MESSAGE
        NOM: ${req.body.name} \n
        ---------------------------------- \n
        Téléphone: ${req.body.phone} \n
        ---------------------------------- \n
        Email: ${req.body.email} \n
        ---------------------------------- \n
        Message: \n
        ${req.body.message} \n
        ---------------------------------- \n
    `


    // create reusable transporter object using the default SMTP transport
    let transporter = createTransport({
        host: "premium150.web-hosting.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `"Bogital Forms" <${req.body._email}>`,
        to: "lkami@bogital.com",
        subject: "NOUVEAU MESSAGE (bikoulacomplexe.com)",
        text,
        html: "<p>Message de BOGITAL forms</p>",
    });

    res.redirect(req.body._email)

    // res.status(200).json({ name: 'John Doe' })
}
