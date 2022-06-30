// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export type QuickContactData = {
  senderName: string;
  senderEmail: string;
  senderMessage: string;
};

let transporter = nodemailer.createTransport({
  host: 'smtp.wp.pl',
  port: 465,
  secure: true,
  auth: {
    user: 'portfolio.mailer@wp.pl',
    pass: 'a9p9TniEwC9pUC4',
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  if (req.method !== 'POST') return res.status(404).send();

  const { senderEmail, senderMessage, senderName }: QuickContactData = req.body;

  let info = await transporter.sendMail({
    from: `"Portfolio Mailer" <portfolio.mailer@wp.pl>`, // sender address
    to: 'michal.kepka16@gmail.com', // list of receivers
    subject: 'Portfolio - Quick Contact', // Subject line
    html: `
      <h2 class="header">Sender: <u>${senderName}</u> &lt;${senderEmail}&gt;</h2> 
      <h4>Message: </h4>
      <p>${senderMessage}</p>

      <style>
        .header {
          color: red;
        } 
      </style>
    `,
  });

  console.log(info);

  res.status(200).send();
}
