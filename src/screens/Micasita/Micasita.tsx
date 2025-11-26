import React, { useRef, useState } from "react";
import { AssessmentTestSection } from "./sections/AssessmentTestSection";
import { ChatbotSection } from "./sections/ChatbotSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { NavigationSection } from "./sections/NavigationSection";
import { ResourcesSection } from "./sections/ResourcesSection";
import { ResourcesWrapperSection } from "./sections/ResourcesWrapperSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const Micasita = (): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const inicioRef = useRef<HTMLDivElement>(null);
  const recursosRef = useRef<HTMLDivElement>(null);
  const testimoniosRef = useRef<HTMLDivElement>(null);
  const testRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? "dark bg-[#1a202c]" : "bg-white"} overflow-hidden w-full flex flex-col transition-colors duration-300`}>
      <NavigationSection
        onNavigate={scrollToSection}
        refs={{ inicioRef, recursosRef, testimoniosRef, testRef }}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />
      <div ref={inicioRef}>
        <HeroSection
          onExplorarRecursos={() => scrollToSection(recursosRef)}
          onEmergencia={() => scrollToSection(footerRef)}
          isDarkMode={isDarkMode}
        />
      </div>
      <div ref={recursosRef}>
        <ResourcesSection isDarkMode={isDarkMode} />
        <ResourcesWrapperSection isDarkMode={isDarkMode} />
      </div>
      <div ref={testimoniosRef}>
        <TestimonialsSection isDarkMode={isDarkMode} />
      </div>
      <div ref={testRef}>
        <AssessmentTestSection isDarkMode={isDarkMode} />
      </div>
      <ChatbotSection isDarkMode={isDarkMode} />
      <div ref={footerRef}>
        <FooterSection isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};
