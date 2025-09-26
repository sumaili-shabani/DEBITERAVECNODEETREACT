import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { apiURL, fileUrl } from "../../../../../api/config";
import { showError, showMessage } from "../../../../../api/callApi";

// Définir les montants prédéfinis
const donationAmounts = [
    { value: 10000, label: "10 000 CDF - Soutenez notre mission 🌱" },
    { value: 25000, label: "25 000 CDF - Soutenez notre mission 🚀" },
    { value: 50000, label: "50 000 CDF - Soutenez notre mission 🚀" },
    { value: 100000, label: "100 000 CDF - Faites la différence 💡" },
    { value: 200000, label: "200 000 CDF - Aidez un projet innovant 🌱" },
    { value: 2500000, label: "2 500 000 CDF - Investissez dans l’avenir ✨" },
];

const DonationForm: React.FC = () => {
    const [formData, setFormData] = useState({
        phoneNumber: "",
        provider: "ORANGE_COD",
        amount: 0,
        clientReferenceId: `INV-${Date.now()}`,
        orderId: `ORD-${Date.now()}`,
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAmountClick = (amount: number) => {
        setFormData({ ...formData, amount });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.amount <= 999) {
            showError("Veuillez entrer un montant valide. le minimum est de 1 000 CDF. ❌");
        } else {
            
            setLoading(true);
            try {
                const res = await axios.post(`${apiURL}/post_donation`, formData);
                const message = `Traitement de votre don,  \n veillez saisir votre mot de passe 
                ${formData.provider === 'ORANGE_COD' ? 'Orange Money' : formData.provider === 'VODACOM_MPESA_COD' ? 'M-Pesa' : 'Airtel Money'} 
                sur votre téléphone. \n Montant: ${formData.amount} CDF.\n 
                Nous vous remercions sincerement pour votre geste!!!`;
                showMessage(message);
                setLoading(false);
            } catch (err: any) {
                showError("❌ Erreur : " + (err.response?.data?.error || err.message));
                setLoading(false);
            }
        }
    };

    return (
        <div className="container mt-4">
            {/* Inclure Font Awesome CDN dans index.html */}
            <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
                <h2 className="mb-3">
                    <i className="fas fa-hand-holding-usd me-2"></i> Faites un don
                </h2>

                <p className="text-muted">
                    Votre contribution permet à notre projet de grandir et d’impacter positivement la communauté.
                </p>

                <div className="mb-3">
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Numéro de téléphone"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <select
                        name="provider"
                        value={formData.provider}
                        onChange={handleChange}
                        className="form-select"
                        required
                    >
                        <option value="ORANGE_COD">Orange Money</option>
                        <option value="VODACOM_MPESA_COD">M-Pesa</option>
                        <option value="AIRTEL_COD">Airtel Money</option>
                    </select>
                </div>

                <div className="mb-3">
                    <input
                        type="number"
                        name="amount"
                        placeholder="Montant (CDF)"
                        value={formData.amount}
                        onChange={handleChange}
                        required
                        className="form-control"
                        min={1000}
                    />
                </div>

                <div className="mb-3">
                    <p className="mb-2"><i className="fas fa-lightbulb me-2"></i> Choisissez un montant rapide :</p>
                    <div className="d-flex flex-wrap gap-2">
                        {donationAmounts.map((don) => (
                            <button
                                type="button"
                                key={don.value}
                                className="btn btn-outline-success"
                                onClick={() => handleAmountClick(don.value)}
                                title={don.label}
                            >
                                <i className="fas fa-money-bill-wave me-1"></i>
                                {don.label.split(" - ")[0]}
                            </button>
                        ))}
                    </div>
                </div>

                <button type="submit" disabled={loading} className="btn btn-success w-100">
                    
                    {loading ? (
                        <span>
                            <i className="fas fa-spinner fa-spin me-2"></i> Envoi...
                        </span>
                    ) : (
                        <span>
                            <i className="fas fa-gift me-2"></i> Je fais un don maintenant
                        </span>
                    )}
                </button>
            </form>
        </div>
    );
};

export default DonationForm;
