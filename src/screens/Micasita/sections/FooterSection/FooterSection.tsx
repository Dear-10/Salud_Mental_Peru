import React from "react";
import { Separator } from "../../../../components/ui/separator";

const footerColumns = [
  {
    title: "Sección",
    links: ["Inicio", "Recursos", "Testimonios", "Test Autoevaluación"],
  },
  {
    title: "Recursos",
    links: ["Biblioteca", "Videoteca", "Animos"],
  },
  {
    title: "Test",
    links: ["Depresión", "Ansiedad"],
  },
  {
    title: "Contacto",
    links: ["Facebook", "X", "Instagram", "Tiktok"],
  },
];

const bottomLinks = [
  { text: "Política de privacidad" },
  { text: "Términos y Condiciones" },
];

interface FooterSectionProps {
  isDarkMode: boolean;
}

export const FooterSection = ({ isDarkMode }: FooterSectionProps): JSX.Element => {
  return (
    <footer className={`w-full py-20 px-[60px] transition-colors duration-300 ${isDarkMode ? "bg-[#2d3748]" : "bg-[#f2815080]"}`}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
          <div className="flex-1 max-w-[470px]">
            <div className="flex items-center gap-[5px] mb-[17px]">
              <img
                className="w-20 h-20"
                alt="Icon logo"
                src="/heart-with-mouse.png"
              />
              <div className={`flex items-center justify-center opacity-90 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-base tracking-[-0.48px] leading-6 transition-colors duration-300 ${isDarkMode ? "text-white" : "text-[#263238]"}`}>
                Salud Mental Peru
              </div>
            </div>

            <p className={`font-medium-type-16 font-[number:var(--medium-type-16-font-weight)] text-[length:var(--medium-type-16-font-size)] tracking-[var(--medium-type-16-letter-spacing)] leading-[var(--medium-type-16-line-height)] [font-style:var(--medium-type-16-font-style)] mb-5 transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-black"}`}>
              Comprometidos con el bienestar mental de las comunidades
              vulnerables. Ofrecemos apoyo psicológico accesible, recursos
              educativos y un espacio seguro para sanar y crecer.
            </p>

            <img
              className="w-[228px] h-[69.6px]"
              alt="Icons contact"
              src="/icons---contact.svg"
            />
          </div>

          <div className="flex-1 flex justify-end">
            <div className="flex gap-12 lg:gap-[47px]">
              {footerColumns.map((column, index) => (
                <div key={index} className="flex flex-col gap-6">
                  <h3 className={`font-semibold-type-20 font-[number:var(--semibold-type-20-font-weight)] text-[length:var(--semibold-type-20-font-size)] tracking-[var(--semibold-type-20-letter-spacing)] leading-[var(--semibold-type-20-line-height)] whitespace-nowrap [font-style:var(--semibold-type-20-font-style)] transition-colors duration-300 ${isDarkMode ? "text-white" : "text-black"}`}>
                    {column.title}
                  </h3>
                  <nav className={`flex flex-col gap-6 font-medium-type-16 font-[number:var(--medium-type-16-font-weight)] text-[length:var(--medium-type-16-font-size)] tracking-[var(--medium-type-16-letter-spacing)] leading-[var(--medium-type-16-line-height)] [font-style:var(--medium-type-16-font-style)] transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-black"}`}>
                    {column.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href="#"
                        className="hover:opacity-80 transition-opacity"
                      >
                        {link}
                      </a>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[35px]">
          <Separator className={isDarkMode ? "bg-white/20" : "bg-black/20"} />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className={`font-semibold-type-16 font-[number:var(--semibold-type-16-font-weight)] text-[length:var(--semibold-type-16-font-size)] tracking-[var(--semibold-type-16-letter-spacing)] leading-[var(--semibold-type-16-line-height)] [font-style:var(--semibold-type-16-font-style)] transition-colors duration-300 ${isDarkMode ? "text-white" : "text-black"}`}>
              ©2025 Tesis
            </div>

            <div className="flex gap-6">
              {bottomLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className={`font-semibold-type-16 font-[number:var(--semibold-type-16-font-weight)] text-[length:var(--semibold-type-16-font-size)] tracking-[var(--semibold-type-16-letter-spacing)] leading-[var(--semibold-type-16-line-height)] [font-style:var(--semibold-type-16-font-style)] hover:opacity-80 transition-colors duration-300 ${isDarkMode ? "text-white" : "text-black"}`}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
