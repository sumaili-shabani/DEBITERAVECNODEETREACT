import React, { useState } from 'react'
import { saveItem } from '../../../../../hooks/useCrud';

interface ContactForm {
    id?: number;
    name: string;
    email: string;
    telephone: string;
    subject: string;
    message: string;
    createdAt?: string;
    updatedAt?: string;
}

export default function ContactFormulaire() {
    const [formData, setFormData] = useState<Partial<ContactForm>>({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await saveItem('/contact_form', formData);
            // alert("Votre message a été envoyé avec succès !");
            setFormData({});
        } catch (err: any) {
            console.error(err);
            setError("Erreur lors de l'envoi du message.");
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="col-md-12">
            {/* ... Hero + Contact Info inchangés ... */}

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="name" className="form-label">Nom complet</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Votre nom"
                            value={formData.name || ''}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="exemple@email.com"
                            value={formData.email || ''}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="telephone" className="form-label">N° de Téléphone</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="telephone"
                            name="telephone"
                            placeholder="243..."
                            value={formData.telephone || ''}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="subject" className="form-label">Sujet</label>
                        <select
                            className="form-select"
                            id="subject"
                            name="subject"
                            value={formData.subject || ''}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Sélectionnez un sujet</option>
                            <option>Support technique</option>
                            <option>Partenariat commercial</option>
                            <option>Presse/Médias</option>
                            <option>Recrutement</option>
                            <option>Autre demande</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            value={formData.message || ''}
                            onChange={handleInputChange}
                            rows={5}
                            placeholder="Décrivez votre demande en détails..."
                            required
                        ></textarea>
                    </div>
                    <div className="col-12 mt-2">
                        <button
                            type="submit"
                            className="btn btn-success btn-lg w-100 rounded-pill py-3"
                            disabled={loading}
                        >
                            {loading ? "Envoi en cours..." : <>Envoyer le message <i className="fas fa-paper-plane ms-2"></i></>}
                        </button>
                    </div>
                </div>
            </form>

            {/* Google Maps inchangé */}
        </div>
    );
}
