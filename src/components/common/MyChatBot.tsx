import { useState } from "react";
import ChatBot from "react-chatbotify";

export const MyChatBot = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const toggleChat = () => setIsChatOpen(!isChatOpen);

    const settings = {
        isOpen: true,
        general: {
            primaryColor: '#42b0c5',
            secondaryColor: '#491d8d',
            embedded: true
        },
        audio: {
            disabled: false,
        },
        chatHistory: {
            storageKey: "concepts_settings"
        }
    }

    const flow = {
        start: {
            message: "Hola, ¿qué quieres hacer?",
            options: ["Consultar productos", "Hablar con soporte"],
            path: "resolverOpcion"
        },
        resolverOpcion: {
            message: (params: any) => {
                if (params.userInput === "Consultar productos") {
                    return "Puedes consultar productos aquí: https://miweb.com/productos";
                } else if (params.userInput === "Hablar con soporte") {
                    return "Un momento... ya te paso con alguien del equipo 😄";
                }
                return "No entendí tu opción 🤔";
            },
            chatDisabled: true
        }
    };

    return (
        <>
            <button onClick={toggleChat} className="chat-toggle-btn">
                {isChatOpen ? "Cerrar Chat" : "Abrir Chat"}
            </button>

            {!isChatOpen ? null : (
                <section className="myChatBot">
                    <ChatBot
                        flow={flow}
                        settings={settings}
                    />
                </section>
            )}
        </>
    );
}