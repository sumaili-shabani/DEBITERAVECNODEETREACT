// frontend/src/components/Chatbot.tsx
import React, { useState } from "react";
import "./Chatbot.css"; // Styles custom pour le chatbot

const Chatbot: React.FC = () => {
    const [open, setOpen] = useState(false);

    const toggleChat = () => setOpen(!open);

    return (
        <>
            {/* Icône flottante */}
            <div className="chatbot-icon" onClick={toggleChat}>
                <i className="fas fa-comment-dots fa-2x"></i>
            </div>

            {/* Fenêtre chatbot */}
            {open && (
                <div className="chatbot-window card shadow">
                    <div className="card-header d-flex justify-content-between align-items-center bg-primary text-white">
                        <span>SwiftRide Info</span>
                        <button className="btn btn-sm btn-light" onClick={toggleChat}>
                            &times;
                        </button>
                    </div>
                    <div className="card-body">
                        <p>
                            🚖 <strong>SwiftRide</strong> est une application mobile sécurisée
                            pour commander des taxis rapidement et bénéficier d’un bonus
                            gratuit pour vos premiers kilomètres.
                        </p>
                        <p>
                            Cliquez sur le bouton ci-dessous pour discuter directement avec notre
                            support via WhatsApp :
                        </p>
                        <a
                            href="https://wa.me/243808700138"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success w-100"
                        >
                            <i className="fab fa-whatsapp me-2"></i> Discuter sur WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;
