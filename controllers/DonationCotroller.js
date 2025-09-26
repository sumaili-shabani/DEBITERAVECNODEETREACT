// ⚠️ Remplace par ta vraie clé Bearer
require('dotenv').config(); // 🔑 Charge les variables depuis .env
const axios = require("axios");
const PAWAPAY_TOKEN = process.env.PAWAPAY_TOKEN;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const crypto = require("crypto");


// Génère un UUID v4 aléatoire
function generateRandomUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = crypto.randomInt(0, 16); // valeur entre 0 et 15
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

// Génère un ClientID aléatoire (hexadécimal sur 4 caractères)
function generateRandomClientID() {
    const randomNumber = crypto.randomInt(0, 0xffff); // 0x0000 → 0xFFFF
    return randomNumber.toString(16).padStart(4, "0");
}

function removeSpaces(input) {
    // Supprimer tous les espaces
    const cleaned = input.replace(/\s+/g, "");

    // Vérifier si le numéro commence par "0"
    if (cleaned.startsWith("0")) {
        return "243" + cleaned.substring(1);
    }

    // Retourner la chaîne telle quelle
    return cleaned;
}

exports.sendDonationInfo = async (req, res) => {
    try {
        const { phoneNumber, provider, amount } = req.body;

        // Préparer le body pour PawaPay
        const data = {
            depositId: generateRandomUUID(), // identifiant unique
            payer: {
                type: "MMO",
                accountDetails: {
                    phoneNumber: removeSpaces(phoneNumber),
                    provider, // ex: ORANGE_COD, VODACOM_COD, AIRTEL_COD
                },
            },
            clientReferenceId: generateRandomClientID(),
            customerMessage: "Don via PawaPay",
            amount: amount.toString(),
            currency: "CDF",
            metadata: [
                { clientId: generateRandomClientID() },
                { createdBy: "DonationApp" }
            ],
        };

        const response = await axios.post(
            "https://api.pawapay.io/v2/deposits",
            data,
            {
                headers: {
                    Authorization: `Bearer ${PAWAPAY_TOKEN}`,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        );

        res.json(response.data);
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({
            error: error.response?.data || "Erreur de paiement" + error,
        });
    }
};

// Fonction pour effectuer un paiement (payout)
exports.sendPayout = async (req, res) => {
    try {
        const { phoneNumber, provider, amount, customerEmail } = req.body;

        const data = {
            payoutId: generateRandomUUID(),
            amount: amount.toString(),
            currency: "CDF",
            recipient: {
                type: "MMO",
                accountDetails: {
                    provider,
                    phoneNumber: removeSpaces(phoneNumber),
                }
            },
            customerMessage: "Paiement donation",
            metadata: [
                { orderId: generateRandomClientID() || `ORD-${Date.now()}` },
                { customerId: "customer@donation.com", isPII: true }
            ]
        };

        const response = await axios.post(
            'https://api.pawapay.io/v2/payouts',
            data,
            {
                headers: {
                    Authorization: `Bearer ${PAWAPAY_TOKEN}`,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            }
        );

        res.json(response.data);

    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({
            error: error.response?.data || "Erreur de paiement: " + error,
        });
    }
};


exports.chatGpt = async (req, res) => {
    const { message } = req.body;

    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "Tu es un assistant pour SwiftRide, tu aides les clients à comprendre l'application." },
                    { role: "user", content: message }
                ],
                max_tokens: 150
            },
            {
                headers: {
                    "Authorization": `Bearer ${OPENAI_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        const reply = response.data.choices[0].message.content;
        res.json({ reply });
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(500).json({ error: "Erreur serveur" });
    }
};