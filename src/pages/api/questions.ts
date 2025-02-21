//  Importamos los módulos necesarios de Astro para manejar peticiones HTTP

//  Función para obtener todas las preguntas
export async function GET() {
    //  Array de preguntas con opciones de respuesta y respuesta correcta
    const questions = [
      {
        id: 1,
        question: "¿Cuál es la presión arterial normal en un adulto sano?",
        options: ["120/80 mmHg", "140/90 mmHg", "90/60 mmHg", "160/100 mmHg"],
        answer: "120/80 mmHg"
      },
      {
        id: 2,
        question: "¿Cuál es la unidad básica funcional del riñón?",
        options: ["Nefrona", "Glomérulo", "Túbulo distal", "Uréter"],
        answer: "Nefrona"
      },
      {
        id: 3,
        question: "¿Cuál es el órgano más grande del cuerpo humano?",
        options: ["Hígado", "Piel", "Cerebro", "Corazón"],
        answer: "Piel"
      },
      {
        id: 4,
        question: "¿Cuál es la principal función de los glóbulos rojos?",
        options: ["Transportar oxígeno", "Combatir infecciones", "Regular la temperatura", "Producir anticuerpos"],
        answer: "Transportar oxígeno"
      },
      {
        id: 5,
        question: "¿Qué tipo de sangre es el donante universal?",
        options: ["A+", "O+", "AB-", "O-"],
        answer: "O-"
      },
      {
        id: 6,
        question: "¿Cuál es la principal causa de úlceras gástricas?",
        options: ["Estrés", "Helicobacter pylori", "Comida picante", "Alcohol"],
        answer: "Helicobacter pylori"
      },
      {
        id: 7,
        question: "¿Qué vitamina es esencial para la coagulación de la sangre?",
        options: ["Vitamina C", "Vitamina D", "Vitamina K", "Vitamina A"],
        answer: "Vitamina K"
      },
      {
        id: 8,
        question: "¿Dónde se produce la insulina en el cuerpo?",
        options: ["Hígado", "Páncreas", "Riñón", "Bazo"],
        answer: "Páncreas"
      },
      {
        id: 9,
        question: "¿Cuál es la frecuencia cardíaca normal en reposo de un adulto?",
        options: ["50-70 latidos por minuto", "60-100 latidos por minuto", "80-120 latidos por minuto", "100-140 latidos por minuto"],
        answer: "60-100 latidos por minuto"
      },
      {
        id: 10,
        question: "¿Qué estructura conecta la faringe con los pulmones?",
        options: ["Tráquea", "Esófago", "Laringe", "Bronquios"],
        answer: "Tráquea"
      }
    ];
    // 🔹 Retorna la lista de preguntas en formato JSON con código de estado 200 (OK)
    return new Response(JSON.stringify(questions), { status: 200 });
  }
  
  // 🚀 Función para recibir respuestas del usuario y verificar si son correctas
  export async function POST({ request }) {
    try {
      // 🔹 Intentamos leer el JSON enviado por el usuario
      const body = await request.json();
      console.log("Datos recibidos:", body); // ✅ Depuración
  
      // 🔹 Validación: Si no se envían los datos correctos, devolvemos un error 400
      if (!body.id || !body.selectedOption) {
        return new Response(
          JSON.stringify({ error: "Faltan datos en la solicitud" }),
          { status: 400 }
        );
      }
  
      // 🔹 Base de datos de respuestas correctas
      const questions = [
        { id: 1, answer: "120/80 mmHg" },
        { id: 2, answer: "Nefrona" },
        { id: 3, answer: "Piel" },
        { id: 4, answer: "Transportar oxígeno" },
        { id: 5, answer: "O-" },
        { id: 6, answer: "Helicobacter pylori" },
        { id: 7, answer: "Vitamina K" },
        { id: 8, answer: "Páncreas" },
        { id: 9, answer: "60-100 latidos por minuto" },
        { id: 10, answer: "Tráquea" }

      ];
  
      // 🔹 Buscamos la pregunta según el ID recibido
      const question = questions.find(q => q.id === body.id);
  
      // 🔹 Si la pregunta no existe, devolvemos un error 404
      if (!question) {
        return new Response(
          JSON.stringify({ error: "Pregunta no encontrada" }),
          { status: 404 }
        );
      }
  
      // 🔹 Comparamos la respuesta del usuario con la respuesta correcta
      const isCorrect = question.answer === body.selectedOption;
  
      // 🔹 Retornamos el resultado con el estado de la respuesta
      return new Response(
        JSON.stringify({
          correct: isCorrect,
          totalQuestions: questions.length,
          selectedOption: body.selectedOption,
          correctAnswer: question.answer
        }),
        { status: 200 }
      );
  
    } catch (error) {
      // 🔹 Capturamos cualquier error interno y lo mostramos en consola
      console.error("Error en el servidor:", error);
      return new Response(
        JSON.stringify({ error: "Error interno del servidor" }),
        { status: 500 }
      );
    }
  }