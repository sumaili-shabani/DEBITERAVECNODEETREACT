import React, { useEffect } from 'react';

declare global {
    interface Window {
        Checkout: any;
        errorCallback: (error: any) => void;
        cancelCallback: () => void;
    }
}

interface PaymentCheckoutProps {
    sessionId: string;
    sessionVersion: string;
    orderId: string;
    amount: number;
    merchantDisplay: string;
    currency: string;
    returnUrl: string;
}

const PaymentCheckout: React.FC<PaymentCheckoutProps> = ({
    sessionId,
    sessionVersion,
    orderId,
    amount,
    merchantDisplay,
    currency,
    returnUrl
}) => {

    useEffect(() => {
        // Définir les callbacks AVANT de charger le script
        window.errorCallback = (error: any) => {
            console.error("Erreur de paiement:", error);
            alert("Erreur de paiement: " + JSON.stringify(error));
            window.location.href = returnUrl;
        };

        window.cancelCallback = () => {
            console.log("Paiement annulé");
            alert("Paiement annulé");
            window.location.href = returnUrl;
        };

        // Charger le script de checkout avec data-error et data-cancel
        const script = document.createElement("script");
        script.src = "https://ap-gateway.mastercard.com/checkout/version/59/checkout.js";
        script.async = true;
        script.setAttribute("data-error", "errorCallback");
        script.setAttribute("data-cancel", "cancelCallback");

        script.onload = () => {
            if (window.Checkout) {
                window.Checkout.configure({
                    session: {
                        id: sessionId,
                        version: sessionVersion
                    },
                    order: {
                        amount: amount,
                        currency: currency,
                        description: `Paiement en ligne à ${merchantDisplay}`
                    },
                    interaction: {
                        merchant: {
                            name: merchantDisplay,
                            address: {
                                line1: "Kinshasa",
                                line2: "RDC"
                            }
                        }
                    }
                });
            }
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [sessionId, sessionVersion, amount, merchantDisplay, currency, returnUrl]);

    const initiatePayment = () => {
        if (window.Checkout) {
            window.Checkout.showPaymentPage();
        }
    };

    return (
        <div className="payment-section">
            <h3>💳 Paiement en Ligne</h3>
            <div className="amount-display">
                <strong>Montant:</strong> {amount.toFixed(2)} {currency}
            </div>

            <div className="session-info">
                <strong>Session de paiement :</strong><br />
                ID: {sessionId}<br />
                Version: {sessionVersion}<br />
                Commande: {orderId}
            </div>
            
            <button className="pay-button" onClick={initiatePayment}>
                🚀 Lancer le Paiement
            </button>
        </div>
    );
};

export default PaymentCheckout;
