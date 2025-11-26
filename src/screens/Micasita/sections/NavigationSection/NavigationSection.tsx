import React, { useState } from "react";

interface NavigationSectionProps {
  onNavigate: (ref: React.RefObject<HTMLDivElement>) => void;
  refs: {
    inicioRef: React.RefObject<HTMLDivElement>;
    recursosRef: React.RefObject<HTMLDivElement>;
    testimoniosRef: React.RefObject<HTMLDivElement>;
    testRef: React.RefObject<HTMLDivElement>;
  };
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const navigationItems = [
  { label: "Inicio", key: "inicioRef" },
  { label: "Recursos", key: "recursosRef" },
  { label: "Testimonios", key: "testimoniosRef" },
  { label: "Test", key: "testRef" },
];

export const NavigationSection = ({
  onNavigate,
  refs,
  isDarkMode,
  onToggleDarkMode,
}: NavigationSectionProps): JSX.Element => {
  const [activeItem, setActiveItem] = useState("Inicio");

  const handleNavClick = (label: string, key: string) => {
    setActiveItem(label);
    onNavigate(refs[key as keyof typeof refs]);
  };
  return (
    <nav className={`w-full flex items-center justify-between px-14 py-2.5 border-b border-solid transition-colors duration-300 ${
      isDarkMode ? "border-[#4a5568] bg-[#2d3748]" : "border-[#486283] bg-white"
    } sticky top-0 z-50`}>
      <div className="flex items-center gap-[5px]">
        <img
          className="w-20 h-20"
          alt="Heart with mouse"
          src="/heart-with-mouse.png"
        />
        <div className={`flex items-center justify-center opacity-90 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-base tracking-[-0.48px] leading-6 transition-colors duration-300 ${
          isDarkMode ? "text-white" : "text-[#263238]"
        }`}>
          Salud Mental Peru
        </div>
      </div>

      <div className="flex items-center gap-[30px]">
        {navigationItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleNavClick(item.label, item.key)}
            className={`flex items-center justify-center [font-family:'Plus_Jakarta_Sans',Helvetica] text-base tracking-[-0.48px] leading-6 transition-all duration-300 hover:scale-105 ${
              activeItem === item.label
                ? "font-semibold text-[#aa461a]"
                : isDarkMode
                  ? "font-medium text-white opacity-90"
                  : "font-medium text-[#263238] opacity-90"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <button
        onClick={onToggleDarkMode}
        className="flex items-center justify-center w-[50px] h-[50px] rounded-[10px] border border-solid border-[#fe7c47] transition-all duration-300 hover:scale-110 hover:bg-[#fe7c47]/10"
      >
        <img
          className="w-10 h-10 transition-transform duration-300"
          alt="Toggle theme"
          src="/black-and-white.png"
        />
      </button>
    </nav>
  );
};
