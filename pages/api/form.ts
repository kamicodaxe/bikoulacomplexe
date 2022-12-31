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
        from: '"Farhan from Coding Day - Testing" <forms@bogital.com>', // sender address
        to: "lkami@bogital.com", // list of receivers
        subject: "Formulaire Site internet", // Subject line
        text: "Coding Day?", // plain text body
        html: "<h1>Coding Day</h1>", // html body
    });

    res.redirect('https://bikoulacomplexe.com')

    // res.status(200).json({ name: 'John Doe' })
}
