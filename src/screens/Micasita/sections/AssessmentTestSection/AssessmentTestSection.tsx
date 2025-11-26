import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../../../components/ui/dialog";
import { Label } from "../../../../components/ui/label";
import { Progress } from "../../../../components/ui/progress";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";

const testCards = [
  {
    icon: "/test-passed-1.png",
    title: "Test de Depresion",
    description: "Evaluación basada en la escala PHQ-9, validada por profesionales",
    questions: "9 preguntas",
    duration: "~5 minutos",
    testType: "depression",
  },
  {
    icon: "/test-passed-1.png",
    title: "Test de Ansiedad",
    description: "Basado en la escala GAD-7, herramienta clínica reconocida",
    questions: "7 preguntas",
    duration: "~4 minutos",
    testType: "anxiety",
  },
];

const depressionQuestions = [
  {
    id: 1,
    question: "Durante las últimas dos semanas, ¿con qué frecuencia se ha sentido deprimido o sin esperanza?",
    scoring: { "Para nada": 0, "Varios días": 1, "Más de la mitad de los días": 2, "Casi todos los días": 3 },
  },
  {
    id: 2,
    question: "¿Ha perdido interés o placer en hacer las cosas que normalmente disfruta?",
    scoring: { "Para nada": 0, "Varios días": 1, "Más de la mitad de los días": 2, "Casi todos los días": 3 },
  },
  {
    id: 3,
    question: "¿Ha tenido dificultades para dormir, o ha dormido demasiado?",
    scoring: { "Para nada": 0, "Varios días": 1, "Más de la mitad de los días": 2, "Casi todos los días": 3 },
  },
  {
    id: 4,
    question: "¿Se ha sentido cansado o sin energía?",
    scoring: { "Para nada": 0, "Varios días": 1, "Más de la mitad de los días": 2, "Casi todos los días": 3 },
  },
  {
    id: 5,
    question: "¿Ha tenido problemas de concentración o para tomar decisiones?",
    scoring: { "Para nada": 0, "Varios días": 1, "Más de la mitad de los días": 2, "Casi todos los días": 3 },
  },
  {
    id: 6,
    question: "¿Se ha sentido mal consigo mismo, o piensa que es un fracaso o ha decepcionado a su familia?",
    scoring: { "Para nada": 0, "Varios días": 1, "Más de la mitad de los días": 2, "Casi todos los días": 3 },
  },
  {
    id: 7,
    question: "¿Ha tenido dificultades para concentrarse en actividades, como leer o ver televisión?",
    scoring: { "Para nada": 0, "Varios días": 1, "Más de la mitad de los días": 2, "Casi todos los días": 3 },
  },
  {
    id: 8,
    question: "¿Ha hablado o actuado tan lentamente que otras personas han notado? O lo contrario, tan inquieto que se mueve más que de costumbre?",
    scoring: { "Para nada": 0, "Varios días": 1, "Más de la mitad de los días": 2, "Casi todos los días": 3 },
  },
  {
    id: 9,
    question: "¿Ha pensado que sería mejor estar muerto, o ha pensado en hacerse daño de alguna manera?",
    scoring: { "Para nada": 0, "Varios días": 1, "Más de la mitad de los días": 2, "Casi todos los días": 3 },
  },
];

const anxietyQuestions = [
  {
    id: 1,
    question: "¿Se ha sentido nervioso, ansioso o al borde del pánico?",
    scoring: { "Para nada": 0, "Varios días": 1, "Más de la mitad de los días": 2, "Casi todos los días": 3 },
  },
  {
    id: 2,
    question: "¿Ha sido incapaz de detener o controlar la preocupación?",
    scoring: { "Para nada": 0, "Varios días": 1, "Más de la mitad de los días": 2, "Casi todos los días": 3 },
  },
  {
    id: 3,
    question: "¿Ha sentido que la preocupación interfiere con su trabajo, escuela u otras actividades?",
    scoring: { "Para nada": 0, "Varios días": 1, "Más de la mitad de los días": 2, "Casi todos los días": 3 },
  },
  {
    id: 4,
    question: "¿Ha sentido que está irritable?",
    scoring: { "Para nada": 0, "Varios días": 1, "Más de la mitad de los días": 2, "Casi todos los días": 3 },
  },
  {
    id: 5,
    question: "¿Ha tenido dificultad para relajarse?",
    scoring: { "Para nada": 0, "Varios días": 1, "Más de la mitad de los días": 2, "Casi todos los días": 3 },
  },
  {
    id: 6,
    question: "¿Ha estado tan inquieto que le es difícil quedarse quieto?",
    scoring: { "Para nada": 0, "Varios días": 1, "Más de la mitad de los días": 2, "Casi todos los días": 3 },
  },
  {
    id: 7,
    question: "¿Ha tenido miedo de que algo malo pueda ocurrir?",
    scoring: { "Para nada": 0, "Varios días": 1, "Más de la mitad de los días": 2, "Casi todos los días": 3 },
  },
];

const answerOptions = ["Para nada", "Varios días", "Más de la mitad de los días", "Casi todos los días"];

interface AssessmentTestSectionProps {
  isDarkMode: boolean;
}

export const AssessmentTestSection = ({ isDarkMode }: AssessmentTestSectionProps): JSX.Element => {
  const [isTestOpen, setIsTestOpen] = useState(false);
  const [selectedTestType, setSelectedTestType] = useState<"depression" | "anxiety" | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState("");

  const questions = selectedTestType === "depression" ? depressionQuestions : anxietyQuestions;

  const handleStartTest = (testType: "depression" | "anxiety") => {
    setSelectedTestType(testType);
    setIsTestOpen(true);
    setCurrentQuestion(0);
    setAnswers([]);
    setCurrentAnswer("");
    setShowResults(false);
  };

  const handleAnswerSelect = (answer: string) => {
    setCurrentAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (currentAnswer === "") return;

    const newAnswers = [...answers, currentAnswer];
    setAnswers(newAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setCurrentAnswer("");
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    answers.forEach((answer, index) => {
      const q = questions[index];
      totalScore += (q.scoring as Record<string, number>)[answer] || 0;
    });
    return totalScore;
  };

  const getInterpretation = () => {
    const score = calculateScore();
    const testName = selectedTestType === "depression" ? "Depresión" : "Ansiedad";

    if (selectedTestType === "depression") {
      if (score <= 4) return { level: "Mínimo", description: "Síntomas depresivos mínimos o ninguno" };
      if (score <= 9) return { level: "Leve", description: "Síntomas depresivos leves" };
      if (score <= 14) return { level: "Moderado", description: "Síntomas depresivos moderados" };
      if (score <= 19) return { level: "Moderadamente Severo", description: "Síntomas depresivos moderadamente severos" };
      return { level: "Severo", description: "Síntomas depresivos severos" };
    } else {
      if (score <= 4) return { level: "Mínimo", description: "Síntomas de ansiedad mínimos o ninguno" };
      if (score <= 9) return { level: "Leve", description: "Síntomas de ansiedad leves" };
      if (score <= 14) return { level: "Moderado", description: "Síntomas de ansiedad moderados" };
      return { level: "Severo", description: "Síntomas de ansiedad severos" };
    }
  };

  const handleCloseTest = () => {
    setIsTestOpen(false);
    setSelectedTestType(null);
    setShowResults(false);
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const score = calculateScore();
  const interpretation = getInterpretation();
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className={`w-full flex flex-col gap-[54px] py-7 transition-colors duration-300 ${isDarkMode ? "bg-[#1a202c]" : "bg-white"}`}>
      <div className="w-full max-w-[1334px] mx-auto px-4">
        <div className="flex flex-col gap-[50px]">
          <div className="flex flex-col items-center gap-[50px]">
            <h1 className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-5xl tracking-[-0.96px] leading-[72px] text-center transition-colors duration-300 ${isDarkMode ? "text-white" : "text-[#263238]"}`}>
              Test de Autoevaluacion
            </h1>

            <p className={`max-w-[500px] opacity-50 [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-base text-center tracking-[-0.32px] leading-[25.6px] transition-colors duration-300 ${isDarkMode ? "text-white" : "text-[#263238]"}`}>
              Herramientas validadas por profesionales para ayudarte a entender tu estado emocional
            </p>
          </div>

          <div className="flex gap-[30px] justify-center">
            {testCards.map((test, index) => (
              <Card
                key={index}
                className={`w-[400px] shadow-[-10px_0px_10px_#aa461a80] rounded-[30px] border-0 transition-all duration-300 hover:scale-105 hover:shadow-[-10px_0px_10px_#aa461a80] ${isDarkMode ? "bg-[#2d3748]" : "bg-white"}`}
              >
                <CardContent className="p-0 flex flex-col">
                  <img
                    className="ml-[21px] w-[50px] h-[50px] mt-[33.5px]"
                    alt="Test icon"
                    src={test.icon}
                  />

                  <div className="ml-[21px] flex flex-col gap-2.5 mt-[20.5px]">
                    <h3 className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-base tracking-[-0.32px] leading-6 text-center transition-colors duration-300 ${isDarkMode ? "text-white" : "text-black"}`}>
                      {test.title}
                    </h3>

                    <p className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-sm tracking-[-0.28px] leading-[24.5px] transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-black"}`}>
                      {test.description}
                    </p>
                  </div>

                  <div className="ml-[21px] flex items-center justify-between mt-[17.5px] mb-[17.5px] pr-[21px]">
                    <div className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[10px] tracking-[-0.20px] leading-[15px] transition-colors duration-300 ${isDarkMode ? "text-white" : "text-black"}`}>
                      {test.questions}
                      <br />
                      {test.duration}
                    </div>

                    <Button
                      onClick={() => handleStartTest(test.testType as "depression" | "anxiety")}
                      className="bg-[linear-gradient(90deg,rgba(242,129,80,1)_0%,rgba(170,70,26,1)_100%)] hover:opacity-90 w-[150px] h-[50px] rounded-[10px] transition-all duration-300 hover:scale-105"
                    >
                      <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-white text-base tracking-[-0.32px] leading-[25.6px]">
                        Comenzar
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={isTestOpen} onOpenChange={setIsTestOpen}>
        <DialogContent className={`max-w-2xl transition-colors duration-300 ${isDarkMode ? "bg-[#2d3748] border-gray-600" : "bg-white"}`}>
          {!showResults ? (
            <>
              <DialogHeader>
                <DialogTitle className={`text-2xl [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold transition-colors duration-300 ${isDarkMode ? "text-white" : "text-black"}`}>
                  {selectedTestType === "depression" ? "Test de Depresión" : "Test de Ansiedad"}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className={`flex justify-between text-sm [font-family:'Plus_Jakarta_Sans',Helvetica] transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    <span>Pregunta {currentQuestion + 1} de {questions.length}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2 bg-gray-300 rounded-full [&>div]:bg-[#f28150]" />
                </div>

                <div>
                  <p className={`text-lg [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium mb-6 transition-colors duration-300 ${isDarkMode ? "text-white" : "text-black"}`}>
                    {questions[currentQuestion].question}
                  </p>

                  <RadioGroup value={currentAnswer} onValueChange={handleAnswerSelect}>
                    <div className="space-y-4">
                      {answerOptions.map((option) => (
                        <div key={option} className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors duration-300 ${currentAnswer === option ? (isDarkMode ? "bg-[#4a5568]" : "bg-orange-50") : (isDarkMode ? "hover:bg-[#3a4558]" : "hover:bg-gray-50")}`}>
                          <RadioGroupItem value={option} id={option} />
                          <Label htmlFor={option} className={`cursor-pointer [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium transition-colors duration-300 ${isDarkMode ? "text-white" : "text-black"}`}>
                            {option}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex gap-4 pt-6">
                  <Button
                    onClick={handleCloseTest}
                    variant="outline"
                    className={`flex-1 transition-colors duration-300 ${isDarkMode ? "border-gray-600 text-white hover:bg-gray-800" : "border-gray-300"}`}
                  >
                    Cancelar
                  </Button>
                  <Button
                    onClick={handleNextQuestion}
                    disabled={currentAnswer === ""}
                    className="flex-1 bg-[#f28150] hover:bg-[#e06a3a] text-white transition-colors duration-300"
                  >
                    {currentQuestion + 1 === questions.length ? "Finalizar" : "Siguiente"}
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className={`text-3xl [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-center transition-colors duration-300 ${isDarkMode ? "text-white" : "text-black"}`}>
                  Resultados de tu Evaluación
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 py-8">
                <div className={`text-center space-y-2 p-6 rounded-2xl transition-colors duration-300 ${isDarkMode ? "bg-[#4a5568]" : "bg-orange-50"}`}>
                  <p className={`text-sm [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    Puntuación Total
                  </p>
                  <p className="text-5xl [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#f28150]">
                    {score}
                  </p>
                </div>

                <div className={`p-6 rounded-2xl space-y-3 transition-colors duration-300 ${isDarkMode ? "bg-[#4a5568]" : "bg-blue-50"}`}>
                  <h3 className={`text-xl [font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold transition-colors duration-300 ${isDarkMode ? "text-white" : "text-blue-900"}`}>
                    Nivel: {interpretation.level}
                  </h3>
                  <p className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-blue-800"}`}>
                    {interpretation.description}
                  </p>
                </div>

                <div className={`p-6 rounded-2xl space-y-3 transition-colors duration-300 ${isDarkMode ? "bg-[#4a5568]" : "bg-green-50"}`}>
                  <h4 className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold transition-colors duration-300 ${isDarkMode ? "text-white" : "text-green-900"}`}>
                    Recomendaciones
                  </h4>
                  <ul className={`space-y-2 [font-family:'Plus_Jakarta_Sans',Helvetica] text-sm transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-green-800"}`}>
                    <li>• Este test es una herramienta de autoevaluación, no reemplaza el diagnóstico profesional</li>
                    <li>• Si los resultados indican niveles moderados o altos, considera buscar ayuda profesional</li>
                    <li>• Practica técnicas de autocuidado y utiliza nuestros recursos de apoyo</li>
                    <li>• Recuerda que buscar ayuda es un signo de fortaleza, no de debilidad</li>
                  </ul>
                </div>

                <Button
                  onClick={handleCloseTest}
                  className="w-full bg-[#f28150] hover:bg-[#e06a3a] text-white text-lg py-6 rounded-lg transition-colors duration-300"
                >
                  Fin
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
