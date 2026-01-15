'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Phone } from 'lucide-react';

interface Message {
    id: string;
    text: string;
    sender: 'bot' | 'user';
    timestamp: Date;
}

export function SmsSimulator() {
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: 'Hola! Bienvenido a Pixca. Envía "ESTADO" para ver tu reporte.', sender: 'bot', timestamp: new Date() }
    ]);
    const [input, setInput] = useState('');
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: input,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Simulate bot response
        setTimeout(() => {
            let responseText = '';
            const lowerInput = userMsg.text.toLowerCase();

            if (lowerInput.includes('estado')) {
                responseText = '🌱 Reporte de Parcela: \nHumedad: 45% (Optimo)\nTemp: 24°C\nTodo se ve bien!';
            } else if (lowerInput.includes('alerta')) {
                responseText = '⚠️ Alerta: Humedad baja en Sector 3. Se recomienda riego temprano.';
            } else if (lowerInput.includes('regar') || lowerInput.includes('water')) {
                responseText = '💧 Comando Recibido: Iniciando sistema de riego en Sector Norte y Este por 15 minutos.';
            } else if (lowerInput.includes('ayuda')) {
                responseText = 'Comandos disponibles: \n- ESTADO: Ver reporte actual \n- REGAR: Iniciar riego manual \n- ALERTA: Ver últimas alertas';
            } else {
                responseText = 'No entiendo el comando. Intenta "ESTADO" o "AYUDA".';
            }

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: responseText,
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMsg]);
        }, 1000);
    };

    return (
        <div className="w-full max-w-sm mx-auto bg-black rounded-[2rem] p-3 border-4 border-gray-800 shadow-2xl">
            <div className="bg-gray-100 h-[500px] rounded-[1.5rem] overflow-hidden flex flex-col relative">
                {/* Header */}
                <div className="bg-[#075E54] p-3 text-white flex items-center gap-2 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Phone size={16} />
                    </div>
                    <div>
                        <div className="font-bold text-sm">Pixca Bot</div>
                        <div className="text-[10px] opacity-80">En línea</div>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d93671755d.png')] bg-repeat">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[80%] rounded-lg p-2 text-sm shadow-sm ${msg.sender === 'user'
                                    ? 'bg-[#E1FFC7] text-gray-800 rounded-tr-none'
                                    : 'bg-white text-gray-800 rounded-tl-none'
                                    }`}
                            >
                                {msg.text}
                                <div className="text-[9px] text-gray-500 text-right mt-1">
                                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div ref={bottomRef} />
                </div>

                {/* Input */}
                <div className="p-2 bg-white flex gap-2 items-center">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type a message"
                        className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#075E54]"
                    />
                    <button
                        onClick={handleSend}
                        className="w-10 h-10 rounded-full bg-[#075E54] text-white flex items-center justify-center hover:bg-[#128C7E]"
                    >
                        <Send size={16} />
                    </button>
                </div>
            </div>
            <div className="text-center mt-2 text-gray-500 text-xs font-medium">Pixca SMS/WhatsApp Simulation</div>
        </div>
    );
}
