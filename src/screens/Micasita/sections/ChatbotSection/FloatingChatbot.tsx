import { XIcon } from "lucide-react";
import React, { useState } from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface FloatingChatbotProps {
  isDarkMode: boolean;
}

export const FloatingChatbot = ({ isDarkMode }: FloatingChatbotProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "¡Hola! Soy tu asistente de apoyo psicológico. Estoy aquí para escucharte y ayudarte. ¿Cómo te sientes hoy?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");

  const botResponses = [
    "Entiendo cómo te sientes. Es completamente normal tener esos sentimientos.",
    "Gracias por compartir eso conmigo. ¿Hay algo específico que te esté preocupando?",
    "Recuerda que no estás solo. Estoy aquí para apoyarte.",
    "¿Te gustaría hablar más sobre eso? Puedo ofrecerte algunos recursos que podrían ayudarte.",
    "Es valiente de tu parte buscar ayuda. ¿Cómo puedo asistirte mejor?",
  ];

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    const userMessage: Message = {
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");

    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage: Message = {
        text: randomResponse,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const cardBg = isDarkMode ? "bg-[#2d3748]" : "bg-white";

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen && (
        <Card className={`w-[600px] rounded-[20px] overflow-hidden shadow-[0px_5px_25px_#000000b2] border-0 mb-4 transition-all duration-300 animate-fade-up ${cardBg}`}>
          <div className="w-full h-[90px] flex gap-5 bg-[linear-gradient(90deg,rgba(242,129,80,1)_0%,rgba(170,70,26,1)_100%)] px-[19px] items-center">
            <Avatar className="w-[70px] h-[70px]">
              <AvatarImage src="/photo---chatbot.png" alt="Photo chatbot" />
            </Avatar>

            <div className="flex flex-col gap-0 flex-1">
              <h2 className="[font-family:'Inter',Helvetica] font-normal text-white text-[25px] tracking-[0] leading-[37.5px]">
                Hearty
              </h2>
              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-[30px]">
                En línea • Responde en segundos
              </p>
            </div>

            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
            >
              <XIcon className="w-6 h-6" />
            </Button>
          </div>

          <CardContent className="p-0">
            <div className="h-[400px] overflow-y-auto p-[19px] space-y-4">
              {messages.map((message, index) => {
                const messageBg = message.isBot
                  ? (isDarkMode ? "bg-[#4a5568]" : "bg-[#eaeaea]")
                  : "bg-[#f28150]";
                const messageColor = message.isBot
                  ? (isDarkMode ? "text-white" : "text-[#263238]")
                  : "text-white";

                return (
                  <div
                    key={index}
                    className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                  >
                    <div className={`max-w-[420px] rounded-[20px] p-[19px] ${messageBg}`}>
                      <p className={`[font-family:'Inter',Helvetica] font-normal text-lg tracking-[0] leading-[27px] ${messageColor}`}>
                        {message.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative w-full h-[95px]">
              <div className={`absolute top-0 left-0 w-full h-2 border-b-2 [border-bottom-style:solid] transition-colors duration-300 ${isDarkMode ? "border-[#4a5568]" : "border-[#486283b2]"}`} />

              <div className="absolute top-[30px] left-[33px] right-[33px] flex items-center gap-[21px]">
                <div className="flex-1 relative">
                  <Input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Escribe un mensaje..."
                    className={`w-full h-[59px] rounded-[30px] border border-solid px-6 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[25px] tracking-[-0.50px] leading-[37.5px] transition-colors duration-300 ${isDarkMode ? "border-[#4a5568] bg-[#1a202c] text-white placeholder:text-gray-400" : "border-[#26323880] text-[#263238] placeholder:text-[#26323880]"}`}
                  />
                </div>

                <Button
                  onClick={handleSendMessage}
                  className="w-[70px] h-[70px] bg-[#f28150] hover:bg-[#f28150]/90 rounded-[35px] p-0 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <img
                    className="w-[50px] h-[50px]"
                    alt="Paper plane"
                    src="/paper-plane.png"
                  />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[110px] h-[110px] rounded-[55px] border-[3px] border-solid border-[#f28150] bg-white hover:bg-white shadow-lg p-0 relative transition-all duration-300 hover:scale-110 animate-bounce"
      >
        <img
          className="w-[100px] h-[100px]"
          alt="Message bot"
          src="/message-bot.png"
        />
      </Button>
    </div>
  );
};
