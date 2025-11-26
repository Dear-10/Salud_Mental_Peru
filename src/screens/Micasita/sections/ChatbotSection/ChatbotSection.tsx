import React from "react";
import { FloatingChatbot } from "./FloatingChatbot";

interface ChatbotSectionProps {
  isDarkMode: boolean;
}

export const ChatbotSection = ({ isDarkMode }: ChatbotSectionProps): JSX.Element => {
  return <FloatingChatbot isDarkMode={isDarkMode} />;
};
