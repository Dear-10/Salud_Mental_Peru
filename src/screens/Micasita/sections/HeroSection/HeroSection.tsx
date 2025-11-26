import { PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const valuesData = [
  {
    icon: "/goal.png",
    title: "Nuestro Objetivo",
    description:
      "Democratizar el acceso a la salud mental, brindando apoyo psicológico gratuito y de calidad a comunidades vulnerables en todo el Perú",
    marginTop: "mt-[49px]",
    iconMarginTop: "mt-[25px]",
  },
  {
    icon: "/human-resources.png",
    title: "Apoyo Integral",
    description:
      "Ofrecemos recursos variados: videos educativos, libros digitales, mensajes de ánimo y conexión directa con psicólogos voluntarios.",
    marginTop: "mt-[74px]",
    iconMarginTop: "",
  },
  {
    icon: "/earth-planet.png",
    title: "Acceso Universal",
    description:
      "Queremos que toda persona, sin importar su situación económica, tenga acceso a apoyo psicológico profesional y recursos de calidad.",
    marginTop: "mt-[74px]",
    iconMarginTop: "",
  },
];

interface HeroSectionProps {
  onExplorarRecursos: () => void;
  onEmergencia: () => void;
  isDarkMode: boolean;
}

export const HeroSection = ({
  onExplorarRecursos,
  onEmergencia,
  isDarkMode,
}: HeroSectionProps): JSX.Element => {
  return (
    <section className={`w-full py-12 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${
      isDarkMode ? "bg-[#1a202c]" : "bg-white"
    }`}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[46px] tracking-[0] leading-[55.8px] transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-[#263238]"
              }`}>
                TU BIENESTAR
              </h1>
              <h1 className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[46px] tracking-[0] leading-[55.8px] transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-[#263238]"
              }`}>
                NUESTRA PRIORIDAD
              </h1>
            </div>

            <p className={`opacity-50 [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-base tracking-[-0.32px] leading-[25.6px] transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-[#263238]"
            }`}>
              Nuestra plataforma ofrece recursos interactivos y contacto con
              profesionales para fortalecer tu salud mental y emocional. <br />
              Un espacio seguro para crecer.
            </p>

            <div className="flex flex-wrap gap-6">
              <Button
                onClick={onExplorarRecursos}
                className="bg-[linear-gradient(90deg,rgba(242,129,80,1)_0%,rgba(170,70,26,1)_100%)] hover:opacity-90 w-[200px] h-[50px] rounded-[10px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-white text-base tracking-[-0.32px] leading-[25.6px] transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Explorar Recursos
              </Button>

              <Button
                onClick={onEmergencia}
                variant="outline"
                className="border-[#aa461a] text-[#aa461a] hover:bg-[#aa461a]/10 w-[200px] h-[50px] rounded-[10px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-base tracking-[-0.32px] leading-[25.6px] transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <PhoneIcon className="w-[26px] h-[26px] mr-2" />
                Emergencia
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute top-[368px] left-0 w-20 h-20 bg-[#aa461a80] rounded-[40px]" />
            <div className="absolute top-0 right-0 w-[90px] h-[90px] bg-[#e8b50080] rounded-[45px]" />
            <img
              className="relative w-full max-w-[600px] h-auto aspect-[3/2] rounded-[25px] object-cover"
              alt="Mental health support"
              src="/image-2.png"
            />
          </div>
        </div>

        <div className="space-y-12">
          <h2 className={`text-center [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-5xl tracking-[-0.96px] leading-[72px] transition-colors duration-300 ${
            isDarkMode ? "text-white" : "text-[#263238]"
          }`}>
            Nuestros Valores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuesData.map((value, index) => (
              <Card
                key={index}
                className={`shadow-[0px_5px_10px_#aa461a80] rounded-[30px] border-0 overflow-hidden transition-all duration-300 hover:scale-105 ${
                  isDarkMode ? "bg-[#2d3748]" : "bg-white"
                }`}
              >
                <CardContent
                  className={`${value.marginTop} pb-[74px] px-6 flex flex-col gap-[15px]`}
                >
                  <img
                    className={`mx-auto w-[100px] h-[100px] ${value.iconMarginTop}`}
                    alt={value.title}
                    src={value.icon}
                  />

                  <h3 className="text-center [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-black text-2xl tracking-[-0.48px] leading-9">
                    {value.title}
                  </h3>

                  <p className="text-center [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-black text-sm tracking-[-0.28px] leading-[24.5px]">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
