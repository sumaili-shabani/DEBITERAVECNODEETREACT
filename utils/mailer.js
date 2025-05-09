const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'localhost', // ou 'smtp.mailtrap.io' ou autre selon ton service
    port: 1025, // par défaut MailDev ou MailHog
    secure: false,
    tls: { rejectUnauthorized: false }
});

exports.sendEmail = async (to, subject, html) => {
    return transporter.sendMail({
        from: '"Support" <no-reply@elimu.com>',
        to,
        subject,
        html,
    });
};
