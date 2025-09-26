// frontend/src/components/SwiftRideChatbot.tsx
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./SwiftRideChatbot.css";
// import "./Chatbot.css"; // Réutiliser les styles du chatbot existant
import { apiURL } from "../../../../../api/config";

interface Message {
    sender: "user" | "bot";
    text: string;
    timestamp: Date;
}

const SwiftRideChatbot: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            sender: "bot",
            text: "👋 Bonjour ! Je suis l'assistant SwiftRide. Comment puis-je vous aider aujourd'hui ?",
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll vers les nouveaux messages
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const toggleChat = () => setOpen(!open);

    const sendMessage = async () => {
        if (!input.trim() || loading) return;

        const userMessage = input.trim();
        const userMessageObj: Message = {
            sender: "user",
            text: userMessage,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessageObj]);
        setInput("");
        setLoading(true);

        try {
            const res = await axios.post(`${apiURL}/chat`, { message: userMessage });

            const botMessage: Message = {
                sender: "bot",
                text: res.data.reply,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMessage]);
        } catch (err) {
            console.error("Erreur API:", err);

            const errorMessage: Message = {
                sender: "bot",
                text: "⚠️ Désolé, je rencontre un problème technique. Veuillez réessayer ou contactez-nous via WhatsApp.",
                timestamp: new Date()
            };

            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const quickQuestions = [
        "Comment créer un compte ?",
        "Comment commander un taxi ?",
        "Quels sont les tarifs ?",
        "Comment payer ma course ?",
        "Support technique"
    ];

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <>
            {/* Icône flottante */}
            <div className="chatbot-icon" onClick={toggleChat}>
                <i className="fas fa-comment-dots fa-2x"></i>
                {!open && messages.length > 1 && (
                    <span className="chatbot-notification"></span>
                )}
            </div>

            {/* Fenêtre chatbot */}
            {open && (
            <div className="chatbot-window card shadow">
                {/* En-tête */}
                <div className="card-header d-flex justify-content-between align-items-center bg-success text-white">
                        <div className="d-flex align-items-center">
                            <div className="chatbot-avatar me-2">
                                <i className="fas fa-taxi"></i>
                            </div>
                            <div>
                                <span className="fw-bold">SwiftRide Assistant</span>
                                <div className="chatbot-status">
                                    <span className="status-dot"></span>
                                    En ligne
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-sm btn-light" onClick={toggleChat}>
                            &times;
                        </button>
                    </div>

                    {/* Corps de la conversation */}
                    <div className="card-body chatbot-body">
                        <div className="chatbot-messages">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`chatbot-message ${msg.sender === "user" ? "user-message" : "bot-message"}`}
                                >
                                    <div className="message-content">
                                        {msg.text}
                                    </div>
                                    <div className="message-time">
                                        {formatTime(msg.timestamp)}
                                    </div>
                                </div>
                            ))}

                            {loading && (
                                <div className="chatbot-message bot-message">
                                    <div className="message-content typing-indicator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Questions rapides */}
                        {messages.length <= 1 && (
                            <div className="quick-questions">
                                <p className="text-muted small mb-2">Questions fréquentes :</p>
                                <div className="d-flex flex-wrap gap-2">
                                    {quickQuestions.map((question, idx) => (
                                        <button
                                            key={idx}
                                            className="btn btn-outline-success btn-sm"
                                            onClick={() => setInput(question)}
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Zone de saisie */}
                    <div className="card-footer">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Tapez votre message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                disabled={loading}
                            />
                            <button
                                className="btn btn-success"
                                onClick={sendMessage}
                                disabled={loading || !input.trim()}
                            >
                                {loading ? (
                                    <i className="fas fa-spinner fa-spin"></i>
                                ) : (
                                    <i className="fas fa-paper-plane"></i>
                                )}
                            </button>
                        </div>

                        {/* Lien WhatsApp */}
                        <a
                            href="https://wa.me/243808700138"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-success w-100 mt-2"
                        >
                            <i className="fab fa-whatsapp me-2"></i> Contact WhatsApp
                        </a>
                    </div>
                </div>

            )}
        </>
    );
};

export default SwiftRideChatbot;