require('dotenv').config();
const nodemailer = require('nodemailer');


// Configuration du transporteur SMTP
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // mail.dreamofdrc.com
    port: process.env.SMTP_PORT, // 465
    secure: true, // true = SSL/TLS
    auth: {
        user: process.env.SMTP_USER, // swiftride@dreamofdrc.com
        pass: process.env.SMTP_PASS, // ton mot de passe
    },
    tls: {
        rejectUnauthorized: false, // éviter certains blocages SSL
    },
});

// Fonction générique pour envoyer un email
exports.sendEmail = async (to, subject, html) => {
    return transporter.sendMail({
        from: `"Contact Swiftride" <${process.env.SMTP_USER}>`, // expéditeur
        to, // destinataire
        subject,
        html,
    });
};

/*
const transporter = nodemailer.createTransport({
    host: 'localhost', // ou 'smtp.mailtrap.io' ou autre selon ton service
    port: 1025, // par défaut MailDev ou MailHog
    secure: false,
    tls: { rejectUnauthorized: false }
});

exports.sendEmail = async (to, subject, html) => {
    return transporter.sendMail({
        from: '"Support" <no-reply@whatsapp-lite.com>',
        to,
        subject,
        html,
    });
};
*/
