import { NextResponse } from 'next/server';
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const POST = async (req, res) => {
  const body = await req.json();
  const { name, business, phone, email, message } = body;
  try {
    let html;
    if (!business && !message) {
      html = ` <div>
      <h3>QR Form Details</h3>
      <b>User Name:</b> ${name} <br />
      <b>Phone:</b> ${phone} <br />
      <b>Email:</b> ${email} <br />
      </div>`;
    } else {
      html = ` <div>
      <h3>Contact Form Details</h3>
      <b>User Name:</b> ${name} <br />
      <b>Business Name:</b> ${business} <br />
      <b>Phone:</b> ${phone} <br />
      <b>Email:</b> ${email} <br />
      <b>Message:</b> <br /> ${message}
      </div>`;
    }
    const msg = {
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL,
      subject: 'match3win',
      text: 'test',
      html,
    };
    let mail = await sgMail.send(msg);
    return new NextResponse(JSON.stringify(mail, { status: 200 }));
  } catch (error) {
    return new NextResponse(error, { status: 401 });
  }
};
