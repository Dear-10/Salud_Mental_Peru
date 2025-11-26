import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    name: "Julio Perez",
    location: "Puno",
    image: "/image-3-1.png",
    rating: 5,
    text: "Gracias a los recursos de esta plataforma, pude superar mi ansiedad y encontrar un centro de apoyo cerca de mi comunidad. El contenido en quechua me ayudó mucho.",
  },
  {
    name: "Carlos Mendoza",
    location: "Cusco",
    image: "/img-2.png",
    rating: 5,
    text: "En mi comunidad rural, nunca habíamos hablado abiertamente sobre salud mental. Esta plataforma nos ayudó a romper tabúes y buscar ayuda. Después de problemas familiares, encontré en los recursos multimedia un refugio. El apoyo culturalmente sensible marcó la diferencia.",
  },
  {
    name: "Mauricio Lozano",
    location: "Arequipa",
    image: "/image-3-1.png",
    rating: 5,
    text: "Gracias a los recursos de esta plataforma, pude superar mi ansiedad y encontrar un centro de apoyo cerca de mi comunidad. El contenido en quechua me ayudó mucho.",
  },
  {
    name: "Ana García",
    location: "Ayacucho",
    image: "/img-2.png",
    rating: 5,
    text: "La plataforma me ayudó a entender mejor mis emociones. Los recursos son claros y accesibles. Recomiendo esta plataforma a todas mis amigas.",
  },
  {
    name: "Miguel López",
    location: "Junín",
    image: "/image-3-1.png",
    rating: 5,
    text: "Encontré aquí el apoyo que necesitaba. El chatbot es muy útil y los videos educativos me ayudaron a manejar mejor el estrés.",
  },
];

interface TestimonialsSectionProps {
  isDarkMode: boolean;
}

export const TestimonialsSection = ({ isDarkMode }: TestimonialsSectionProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    return [
      testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length],
      testimonials[currentIndex],
      testimonials[(currentIndex + 1) % testimonials.length],
    ];
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className={`relative w-full pt-8 transition-colors duration-300 ${isDarkMode ? "bg-[#2d3748]" : "bg-[#f2815080]"}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <h2 className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-5xl text-center tracking-[-0.96px] leading-[72px] transition-colors duration-300 ${isDarkMode ? "text-white" : "text-[#263238]"}`}>
            Testimonios
          </h2>
          <p className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-lg text-center tracking-[0] leading-[27px] max-w-[529px] transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-black"}`}>
            Historias reales de personas que encontraron apoyo
          </p>
        </div>

        <div className="relative flex items-center justify-center min-h-[500px]">
          <Button
            onClick={prevSlide}
            variant="ghost"
            size="icon"
            className="absolute left-4 z-10 w-[50px] h-[50px] rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeftIcon className="w-[30px] h-[30px]" />
          </Button>

          <div className="flex items-center justify-center gap-8 max-w-7xl px-20">
            {visibleTestimonials.map((testimonial, index) => {
              const isCenter = index === 1;
              const cardWidth = isCenter ? "w-[650px]" : "w-[380px]";
              const cardHeight = isCenter ? "h-[400px]" : "h-[240px]";
              const scale = isCenter ? "scale-100" : "scale-90";
              const zIndex = isCenter ? "z-10" : "z-0";
              const opacity = isCenter ? "opacity-100" : "opacity-70";
              const animation = index === 0 ? "animate-slide-right" : index === 2 ? "animate-slide-left" : "";

              return (
                <div
                  key={index}
                  className={`relative ${cardWidth} ${cardHeight} ${zIndex} ${opacity} transition-all duration-700 ${scale} ${animation}`}
                >
                  <Card className={`absolute h-full w-full rounded-[20px] overflow-hidden transition-all duration-300 ${isDarkMode ? "bg-[#4a5568]" : "bg-white"} ${isCenter ? "border-2 border-[#f28150] shadow-[0px_10px_30px_#00000080]" : "shadow-[0px_5px_10px_#00000080]"}`}>
                    <CardContent className="p-0 relative h-full flex flex-col items-center justify-between">
                      <div className={`w-full flex flex-col items-center ${isCenter ? "pt-8" : "pt-4"}`}>
                        <img
                          className={`${isCenter ? "w-24 h-24" : "w-16 h-16"} border-3 border-solid border-[#f28150] rounded-full object-cover transition-all duration-300`}
                          alt={testimonial.name}
                          src={testimonial.image}
                        />
                        <h3 className={`mt-4 [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-center tracking-[-0.32px] leading-6 transition-colors duration-300 ${isCenter ? "text-lg" : "text-base"} ${isDarkMode ? "text-white" : "text-black"}`}>
                          {testimonial.name}
                        </h3>
                        <p className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-sm tracking-[-0.28px] leading-[24.5px] transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                          {testimonial.location}
                        </p>
                      </div>

                      <div className={`px-6 text-center ${isCenter ? "h-[150px]" : "h-[80px]"} overflow-hidden flex items-center justify-center`}>
                        <p className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal tracking-[-0.20px] leading-[18px] transition-colors duration-300 ${isCenter ? "text-[13px]" : "text-[11px]"} ${isDarkMode ? "text-gray-200" : "text-black"}`}>
                          {testimonial.text}
                        </p>
                      </div>

                      <div className={`flex items-center gap-1 pb-4 ${isCenter ? "mb-2" : ""}`}>
                        {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                          <StarIcon key={starIndex} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[12px] ml-2 transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-black"}`}>
                          {testimonial.rating}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          <Button
            onClick={nextSlide}
            variant="ghost"
            size="icon"
            className="absolute right-4 z-10 w-[50px] h-[50px] rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRightIcon className="w-[30px] h-[30px]" />
          </Button>
        </div>
      </div>
    </section>
  );
};
