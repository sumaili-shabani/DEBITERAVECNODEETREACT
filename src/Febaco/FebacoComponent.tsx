// src/components/FebacoComponent.tsx
import React, { useRef, useState } from "react";
import { apiURL } from "../api/config";
import "./styles/App.css";
import PaymentCheckout from "./PaymentCheckout";
import ReCAPTCHA from "react-google-recaptcha";

declare global {
    interface Window {
        Checkout: any;
    }
}

const FebacoComponent: React.FC = () => {
    const [amount, setAmount] = useState<number>(1);
    const [sessionId, setSessionId] = useState<string | null>(null);
    const [orderId, setOrderId] = useState<string | null>(null);
    const [sessionVersion, setSessionVersion] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const recaptchaRef = useRef<any>(null);

    const callback_site_url = process.env.REACT_APP_RETURN_URL;
    const recaptcha_site_key = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

    const createSession = async () => {
        if (!captchaToken) {
            setError("⚠️ Veuillez confirmer que vous n’êtes pas un robot avant de continuer.");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const res = await fetch(`${apiURL}/create-session`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount, captchaToken }),
            });

            const data = await res.json();

            if (data.success) {
                setSessionId(data.sessionId);
                setSessionVersion(data.sessionVersion);
                setOrderId(data.orderId);

                window.Checkout.configure({
                    session: {
                        id: data.sessionId,
                        version: data.sessionVersion,
                    },
                    order: {
                        amount: amount,
                        currency: "USD",
                        description: "Paiement en ligne EUBABU",
                    },
                    interaction: {
                        merchant: {
                            name: "EUBABU",
                            address: { line1: "Kinshasa", line2: "RDC" },
                        },
                    },
                });
            } else {
                setError("Erreur API: " + JSON.stringify(data.error));
            }
        } catch (err: any) {
            setError("Erreur réseau: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bodyclasse">
            <div className="container2">
                <div
                    style={{
                        padding: "20px",
                        maxWidth: "620px",
                        margin: "auto",
                        background: "white",
                        borderRadius: "12px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                    id="paymentForm"
                >
                    {/* 💚 Bloc Marketing d'encouragement */}
                    <div
                        style={{
                            textAlign: "center",
                            marginBottom: "20px",
                            background:
                                "linear-gradient(135deg, #00b894, #55efc4, #00cec9)",
                            color: "white",
                            borderRadius: "12px",
                            padding: "18px 14px",
                            boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                        }}
                    >
                        <h2 style={{ marginBottom: "6px" }}>🤝 Soutenez EUBABU</h2>
                        <p style={{ fontSize: "0.99rem", lineHeight: "1.4em" }}>
                            Chaque don nous aide à soutenir nos programmes communautaires,
                            à promouvoir la réconciliation des familles et à apporter
                            l’espoir aux plus vulnérables.
                        </p>
                        <p style={{ marginTop: "10px", fontWeight: "600" }}>
                            🌍 Ensemble, faisons la différence !
                        </p>
                    </div>

                    <div className="logo" style={{ textAlign: "center" }}>
                        {process.env.REACT_APP_MERCHANT_DISPLAY || "EUBABU"}
                    </div>
                    <p
                        className="subtitle"
                        style={{
                            textAlign: "center",
                            fontSize: "0.9rem",
                            color: "#555",
                            marginBottom: "20px",
                        }}
                    >
                        {process.env.REACT_APP_SITE_SUBTITLE ||
                            "Plateforme de dons en ligne sécurisée"}
                    </p>

                    {!sessionId ? (
                        <>
                            <label style={{ fontWeight: 500 }}>
                                Montant à donner :
                                <input
                                    type="number"
                                    value={amount}
                                    min={1}
                                    step={0.01}
                                    onChange={(e) =>
                                        setAmount(parseFloat(e.target.value))
                                    }
                                    className="amount-input"
                                    placeholder="Entrez le montant"
                                    style={{
                                        border: "1px solid #ccc",
                                        borderRadius: "6px",
                                        padding: "10px",
                                        width: "100%",
                                        marginTop: "5px",
                                    }}
                                />
                            </label>

                            <div
                                className="currency-display"
                                style={{
                                    textAlign: "center",
                                    marginTop: "8px",
                                    color: "#2d3436",
                                }}
                            >
                                💵 Devise : <b>USD</b> — Montant :{" "}
                                <span id="amountDisplay">
                                    {amount.toFixed(2)} $
                                </span>
                            </div>

                            <div style={{ marginTop: "20px", textAlign: "center" }}>
                                <ReCAPTCHA
                                    sitekey={
                                        recaptcha_site_key ??
                                        "6Ld6nQgsAAAAABT6x7C3MBm4sEnqEUsgDNNugVZ-"
                                    }
                                    onChange={(token: any) =>
                                        setCaptchaToken(token)
                                    }
                                    ref={recaptchaRef}
                                />
                            </div>

                            <button
                                onClick={createSession}
                                style={{
                                    display: "block",
                                    marginTop: "20px",
                                    width: "100%",
                                    background:
                                        "linear-gradient(90deg, #0984e3, #00cec9)",
                                    color: "#fff",
                                    padding: "12px",
                                    border: "none",
                                    borderRadius: "6px",
                                    fontWeight: "600",
                                    fontSize: "1rem",
                                    cursor: "pointer",
                                    transition: "0.3s ease",
                                }}
                                className="pay-button"
                                disabled={loading || amount <= 0}
                            >
                                {loading
                                    ? "⏳ Traitement..."
                                    : "💖 Faire un don maintenant"}
                            </button>

                            {error && (
                                <div
                                    className="error-message"
                                    style={{
                                        color: "red",
                                        textAlign: "center",
                                        marginTop: "10px",
                                    }}
                                >
                                    ❌ {error}
                                </div>
                            )}
                        </>
                    ) : (
                        <PaymentCheckout
                            sessionId={sessionId}
                            sessionVersion={sessionVersion!}
                            orderId={orderId!}
                            amount={amount}
                            merchantDisplay="EUBABU - ASBL"
                            currency="USD"
                            returnUrl={callback_site_url ?? "http://localhost:3000"}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default FebacoComponent;
