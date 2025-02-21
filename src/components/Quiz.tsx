import { useState, useEffect } from "react";

// 🚀 Componente principal del Quiz
export default function Quiz() {
  // 🔹 Estado para almacenar las preguntas
  const [questions, setQuestions] = useState([]);
  // 🔹 Estado para almacenar la puntuación
  const [score, setScore] = useState(0);
  // 🔹 Estado para la pregunta actual
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // 🔹 Estado para mostrar si la respuesta es correcta o incorrecta
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // 📌 useEffect: Cargar preguntas al inicio
  useEffect(() => {
    fetch("/api/questions") // 🔹 Llamada a la API
      .then((res) => res.json())
      .then((data) => setQuestions(data)); // 🔹 Guardamos las preguntas en el estado
  }, []);

  // 🚀 Función para manejar la selección de respuesta
  const handleAnswer = async (selectedOption) => {
    if (!questions[currentQuestion]) {
      console.error("No hay pregunta actual");
      return;
    }

    // 🔹 Enviamos la respuesta seleccionada al backend
    const response = await fetch("/api/questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: questions[currentQuestion].id,
        selectedOption,
      }),
    });

    const result = await response.json();

    if (result.error) {
      console.error("Error en la respuesta:", result.error);
      return;
    }

    // 🔹 Marcamos la respuesta seleccionada como correcta o incorrecta
    setSelectedAnswer(result.correct ? "correcta" : "incorrecta");

    // 🔹 Aumentamos la puntuación si la respuesta es correcta
    if (result.correct) {
      setScore(score + 1);
    }

    // 🔹 Pasamos a la siguiente pregunta después de un pequeño retraso
    setTimeout(() => {
      setSelectedAnswer(null); // 🔹 Reseteamos el estado visual
      setCurrentQuestion(currentQuestion + 1);
    }, 1000);
  };

  // 🚀 Renderizado del quiz
  if (currentQuestion >= questions.length) {
    return (
      <div>
        <h2>
          🎉 Tu puntaje final es {score} de {questions.length}
        </h2>
        <p>({(score / questions.length) * 100}%)</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{questions[currentQuestion]?.question}</h2>
      {questions[currentQuestion]?.options.map((option) => (
        <button
          key={option}
          onClick={() => handleAnswer(option)}
          className={
            selectedAnswer
              ? selectedAnswer === "correcta"
                ? "correct"
                : "incorrect"
              : ""
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}
