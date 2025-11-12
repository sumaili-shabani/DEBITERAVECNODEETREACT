import React, { useRef, useState } from "react";
import { apiURL } from "../api/config";
import "./styles/App.css";
import PaymentCheckout from "./PaymentCheckout";

// Charger Checkout.js globalement dans public/index.html ou dynamiquement
// <script src="https://ap-gateway.mastercard.com/checkout/version/59/checkout.js"
//         data-error="errorCallback" data-cancel="cancelCallback"></script>

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

    const sliderRef = useRef(null);

    const createSession = async () => {
        try {

            setError(null);
            const res = await fetch(`${apiURL}/create-session`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount }),
            });

            const data = await res.json();
            if (data.success) {
                setLoading(false);
                setSessionId(data.sessionId);
                setSessionVersion(data.sessionVersion);
                setOrderId(data.orderId);

                // Configurer Checkout.js
                window.Checkout.configure({
                    session: {
                        id: data.sessionId,
                        version: data.sessionVersion,
                    },
                    order: {
                        amount: amount,
                        currency: "USD",
                        description: "Paiement en ligne FEBACO",
                    },
                    interaction: {
                        merchant: {
                            name: "FEBACO",
                            address: {
                                line1: "Kinshasa",
                                line2: "RDC",
                            },
                        },
                    },
                });
            } else {
                setLoading(false);
                setError("Erreur API: " + JSON.stringify(data.error));
            }
        } catch (err: any) {
            setLoading(false);
            setError("Erreur réseau: " + err.message);
        }
    };

    const initiatePayment = () => {

        if (window.Checkout && sessionId) {
            window.Checkout.showPaymentPage();
        } else {
            alert("Session non initialisée !");
        }
    };
    

    return (
        <div className="bodyclasse">
            <div className="container2">

                <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }} id="paymentForm">
                    {/* <h2>💳 Paiement FEBACO</h2> */}
                    <div className="logo">{process.env.REACT_APP_MERCHANT_DISPLAY || 'FEBACO'}</div>
                    <p className="subtitle">{process.env.REACT_APP_SITE_SUBTITLE || 'Plateforme de Paiement en Ligne'}</p>
                    {!sessionId ? (
                        <>
                            <label>
                                Montant:
                                <input
                                    type="number"
                                    value={amount}
                                    min={1}
                                    step={0.01}
                                    onChange={(e) => setAmount(parseFloat(e.target.value))}

                                    id="amountInput"
                                    className="amount-input"
                                    placeholder="Entrez le montant"
                                    style={{ border: "1px solid #ccc", borderRadius: "4px", padding: "8px", width: "100%" }}
                                />
                            </label>

                            <div className="currency-display">
                                Devise: USD - Montant: <span id="amountDisplay">{amount.toFixed(2)}</span>
                            </div>
                            <button
                                onClick={createSession}
                                style={{ display: "block", marginTop: "20px", width: "100%" }}
                                className="pay-button"
                                disabled={loading || amount <= 0}
                            >

                                {loading ? '⏳ Traitement...' : process.env.REACT_APP_PAY_BUTTON_TEXT || '💳 Payer en toute sécurité'}
                            </button>
                            {/* {error && <p  style={{ color: "red" }}>{error}</p>} */}

                            {error && (
                                <div className="error-message">
                                    ❌ Erreur: {error}
                                </div>
                            )}
                        </>
                    ) : (


                        <div>
                            <PaymentCheckout
                                sessionId={sessionId}
                                sessionVersion={sessionVersion!}
                                orderId={orderId!}
                                amount={amount}
                                merchantDisplay={process.env.REACT_APP_MERCHANT_DISPLAY || 'FEBACO - ASBL'}
                                currency={process.env.REACT_APP_DEFAULT_CURRENCY || 'USD'}
                                returnUrl={process.env.REACT_APP_RETURN_URL || 'http://localhost:3000'}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FebacoComponent;
