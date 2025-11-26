import { ChevronLeftIcon, ChevronRightIcon, DownloadIcon, StarIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const resourcesData = [
  {
    title: "Guía de Primeros Auxilios Psicológicos",
    description: "Manual  para brindar apoyo a crisis emocionales",
    rating: "4.9",
    downloads: "1.8k",
    image: "/book-2.png",
  },
  {
    title: "Técnicas de Respiración y Relajación",
    description: "Ejercicios prácticos para manejar la ansiedad y el estrés",
    rating: "4.9",
    downloads: "1.8k",
    image: "/book-2.png",
  },
  {
    title: "Apoyo en Duelo y Pérdida de familiares",
    description: "Recursos para procesar y superar experiencias de duelo",
    rating: "4.9",
    downloads: "1.8k",
    image: "/book-2.png",
  },
];

interface ResourcesSectionProps {
  isDarkMode: boolean;
}

export const ResourcesSection = ({ isDarkMode }: ResourcesSectionProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % resourcesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + resourcesData.length) % resourcesData.length);
  };

  const visibleResources = [
    resourcesData[currentIndex],
    resourcesData[(currentIndex + 1) % resourcesData.length],
    resourcesData[(currentIndex + 2) % resourcesData.length],
  ];
  return (
    <section className={`w-full flex flex-col gap-[26px] py-[33px] px-4 transition-colors duration-300 ${
      isDarkMode ? "bg-[#2d3748]" : "bg-[#f2815080]"
    }`}>
      <header className="max-w-[500px] mx-auto flex flex-col gap-[22px]">
        <h2 className={`flex items-center justify-center h-[72px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-5xl tracking-[-0.96px] leading-[72px] whitespace-nowrap text-center transition-colors duration-300 ${
          isDarkMode ? "text-white" : "text-[#263238]"
        }`}>
          Recursos
        </h2>

        <p className={`flex items-center justify-center h-[52px] opacity-50 [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-base text-center tracking-[-0.32px] leading-[25.6px] transition-colors duration-300 ${
          isDarkMode ? "text-white" : "text-[#263238]"
        }`}>
          Materiales educativos, libros y herramientas desarrolladas por
          profesionales para fortalecer tu bienestar mental
        </p>
      </header>

      <div className="max-w-[1500px] mx-auto w-full flex flex-col">
        <h3 className={`flex items-center justify-center h-12 [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[32px] text-center tracking-[-0.64px] leading-[48px] transition-colors duration-300 ${
          isDarkMode ? "text-white" : "text-[#263238]"
        }`}>
          Biblioteca Digital
        </h3>

        <div className="relative">
          <Button
            onClick={prevSlide}
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </Button>

          <div className="flex py-8 gap-[50px] justify-center items-stretch overflow-hidden">
            {visibleResources.map((resource, index) => (
            <Card
              key={index}
              className={`w-full max-w-[400px] shadow-[0px_5px_10px_#aa461a80] rounded-[30px] overflow-hidden border-none transition-all duration-700 hover:scale-105 ${index === 0 ? "animate-slide-right" : index === 2 ? "animate-slide-left" : ""} ${
                isDarkMode ? "bg-[#4a5568]" : "bg-white"
              }`}
            >
              <CardContent className="p-[44px_18px] flex flex-col gap-[15px]">
                <div className="flex flex-col gap-[15px]">
                  <img
                    className="w-[100px] h-[50px] mx-auto"
                    alt="Book"
                    src={resource.image}
                  />

                  <h4 className={`flex items-center justify-center min-h-[72px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-2xl text-center tracking-[-0.48px] leading-9 transition-colors duration-300 ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}>
                    {resource.title}
                  </h4>

                  <p className={`min-h-[25px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-sm text-center tracking-[-0.28px] leading-[24.5px] transition-colors duration-300 ${
                    isDarkMode ? "text-gray-300" : "text-black"
                  }`}>
                    {resource.description}
                  </p>
                </div>

                <div className="flex justify-between items-center px-1">
                  <div className="flex items-center gap-1">
                    <StarIcon className={`w-[15px] h-[15px] fill-current transition-colors duration-300 ${
                      isDarkMode ? "text-yellow-400" : "text-black"
                    }`} />
                    <span className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[10px] tracking-[-0.20px] leading-[17.5px] transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}>
                      {resource.rating}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <DownloadIcon className={`w-[15px] h-[15px] transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-black"
                    }`} />
                    <span className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[10px] tracking-[-0.20px] leading-[17.5px] transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}>
                      {resource.downloads}
                    </span>
                  </div>
                </div>

                <Button className="mx-auto w-[200px] h-[50px] rounded-[10px] bg-[linear-gradient(90deg,rgba(242,129,80,1)_0%,rgba(170,70,26,1)_100%)] hover:opacity-90 border-none transition-all duration-300 hover:scale-105">
                  <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-white text-base tracking-[-0.32px] leading-[25.6px]">
                    Descargar
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
          </div>

          <Button
            onClick={nextSlide}
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
