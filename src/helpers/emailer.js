import nodemailer from "nodemailer";
import { config } from "dotenv";
config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

async function sendEmailMessage(to, username) {
    await transporter.sendMail({
        from: `Najot talim`,
        to,
        subject: "Imtixon natijalari",
        html: `
            <h2>Assalomu alaykum ${username}</h2>
            <p>Ustoz oxiri oxshadikuuuu😂</p>
        `,
    });
}

export { sendEmailMessage };
