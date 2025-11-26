import { EyeIcon, StarIcon } from "lucide-react";
import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { VideoPopup } from "../../../../components/VideoPopup";

const videoCards = [
  {
    id: 1,
    image: "/image.png",
    title: "Técnicas de Respiración para Calmar la Ansiedad",
    description: "Aprende ejercicios de respiración profunda para manejar momentos de ansiedad",
    rating: "4.9",
    views: "1.8k",
    hasPlayButton: true,
    videoId: "EGO5m_DBzF8",
  },
  {
    id: 2,
    image: "/image-3-1.png",
    title: "Rutina de Autocuidado Mental",
    description: "Desarrolla hábitos diarios para fortalecer tu bienestar mental",
    rating: "4.9",
    views: "1.8k",
    hasPlayButton: false,
    videoId: "wfOHdfqqJTs",
  },
  {
    id: 3,
    image: "/image.png",
    title: "Reconociendo Señales de Depresión",
    description: "Identifica los síntomas y cuándo buscar ayuda medica profesional",
    rating: "4.9",
    views: "1.8k",
    hasPlayButton: true,
    videoId: "WIb4B79B9zQ",
  },
];

const quoteCards = [
  {
    quote: '"Eres más fuerte de lo que crees, no tengas miedo de fallar"',
    author: "- Equipo Mente Saludable",
  },
  {
    quote: '"Tu fortaleza es mayor que cualquier desafío que enfrentes hoy"',
    author: "- Equipo Mente Saludable",
  },
  {
    quote: '"Hoy es una nueva oportunidad y el éxito es insistir"',
    author: "- Equipo Mente Saludable",
  },
];

interface ResourcesWrapperSectionProps {
  isDarkMode: boolean;
}

export const ResourcesWrapperSection = ({ isDarkMode }: ResourcesWrapperSectionProps): JSX.Element => {
  const [selectedVideo, setSelectedVideo] = useState<{ id: number; title: string; videoId: string } | null>(null);

  return (
    <section className={`w-full py-12 px-4 transition-colors duration-300 ${isDarkMode ? "bg-[#1a202c]" : "bg-white"}`}>
      <div className="max-w-[1400px] mx-auto space-y-16">
        <div className="space-y-8">
          <h2 className={`text-center text-4xl [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold transition-colors duration-300 ${isDarkMode ? "text-white" : "text-[#263238]"}`}>
            Videoteca Digital
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoCards.map((video) => (
              <Card
                key={video.id}
                onClick={() => video.hasPlayButton && setSelectedVideo({ id: video.id, title: video.title, videoId: video.videoId })}
                className={`overflow-hidden rounded-[20px] shadow-[0px_5px_10px_#aa461a80] transition-all duration-300 hover:scale-105 cursor-pointer ${isDarkMode ? "bg-[#2d3748]" : "bg-white"} ${video.hasPlayButton ? "cursor-pointer" : ""}`}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      className="w-full h-[243px] object-cover"
                      alt={video.title}
                      src={video.image}
                    />
                    {video.hasPlayButton && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <img
                          className="w-20 h-20"
                          alt="Play button"
                          src="/circled-play-button.png"
                        />
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className={`font-semibold text-base transition-colors duration-300 ${isDarkMode ? "text-white" : "text-black"}`}>
                      {video.title}
                    </h3>

                    <p className={`text-sm transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-black"}`}>
                      {video.description}
                    </p>

                    <div className="flex justify-between items-center pt-2">
                      <div className="flex items-center gap-1">
                        <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className={`text-xs transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-black"}`}>
                          {video.rating}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <EyeIcon className="w-4 h-4" />
                        <span className={`text-xs transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-black"}`}>
                          {video.views}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h2 className={`text-center text-4xl [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold transition-colors duration-300 ${isDarkMode ? "text-white" : "text-[#263238]"}`}>
            Palabras de Ánimo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quoteCards.map((quote, index) => (
              <Card
                key={index}
                className={`rounded-[20px] shadow-[-10px_0px_10px_#aa461a80] overflow-hidden transition-all duration-300 hover:scale-105 ${isDarkMode ? "bg-[#2d3748]" : "bg-white"}`}
              >
                <CardContent className="p-6 flex flex-col justify-center h-full space-y-4">
                  <p className={`text-center [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-base transition-colors duration-300 ${isDarkMode ? "text-white" : "text-black"}`}>
                    {quote.quote}
                  </p>

                  <p className={`text-center [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-sm transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {quote.author}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <VideoPopup
        isOpen={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        title={selectedVideo?.title || ""}
        videoId={selectedVideo?.videoId || ""}
      />
    </section>
  );
};
