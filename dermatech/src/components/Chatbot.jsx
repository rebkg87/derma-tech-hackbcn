import { useState } from 'react';
import getCompletion from '../openai';

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { text:'Hola, puedo crearte tu rutina de skin care. Dime qué productos tienes en casa y cómo es tu piel y te crearé la rutina perfecta.', sender: 'bot' }
    ]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input.trim() === '') return;

        const userMessage = { text: input, sender: 'user' };
        setMessages([...messages, userMessage]);
        setInput('');

        try {
            const prompt = `${messages.map(msg => msg.sender === 'user' ? `Usuario: ${msg.text}` : `Bot: ${msg.text}`).join('\n')}\nUsuario: ${input}\nBot:`;
            const response = await getCompletion(prompt);

            const botMessage = { text: response.trim(), sender: 'bot' };
            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error('Error al hacer la solicitud a OpenAI:', error);
        }
    };

    return (
        <div className='pt-14'>
            <div className=" w-8/12 p-6 mx-auto space-y-4 bg-white shadow-md rounded-xl">
                <div className="space-y-2">
                    {messages.map((msg, index) => (
                        <div key={index} className={msg.sender === 'bot' ? 'text-left' : 'text-right'}>
                            <span className={msg.sender === 'bot' ? 'text-pink p-2 rounded-lg' : 'bg-pink-light text-white p-2 rounded-lg'}>
                                {msg.text}
                            </span>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="flex space-x-2">
                    <input
                        type="text"
                        className="flex-grow p-2 border border-gray-400 rounded"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Escribe tu mensaje..."
                    />
                    <button className="p-2 text-white rounded bg-pink-medium" type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Chatbot;