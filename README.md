Quiz App - Preguntas y Respuestas

Este proyecto es una aplicación de preguntas y respuestas tipo quiz desarrollada con Astro en el backend (API) y React en el frontend. La API proporciona preguntas y valida respuestas, mientras que el frontend permite a los usuarios interactuar con ellas y calcular un puntaje.

🚀 Cómo ejecutar el proyecto

1️⃣ Clonar el repositorio

  git clone https://github.com/usuario/Koplik-Test.git
  cd Koplik-Test

2️⃣ Instalar dependencias

  npm install

3️⃣ Ejecutar el servidor de desarrollo

  npm run dev

El servidor iniciará en http://localhost:4321/ por defecto.


🖥️ Estructura del Proyecto
📂 proyecto-quiz
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┗ 📜 Quiz.tsx  # Componente principal del frontend
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📂 api
 ┃ ┃ ┃ ┗ 📜 questions.ts  # Endpoint de preguntas y respuestas
 ┃ ┃ ┗ 📜 index.astro  # Página principal
 ┃ ┣ 📂 styles
 ┃ ┃ ┗ 📜 Quiz.css  # Estilos del Quiz
 ┣ 📜 package.json  # Dependencias y scripts
 ┗ 📜 README.md  # Documentación

 📌 Decisiones de Diseño y Posibles Mejoras

🔹 Decisiones de Diseño

Separación de responsabilidades: La API maneja las preguntas y respuestas, mientras que el frontend maneja la UI y la interacción del usuario.

Uso de Astro + React: Astro se usa para renderizar la aplicación con React manejando la interactividad.

Estilos en CSS separado: Se organiza en Quiz.css para mantener el código limpio.

🔹 Posibles Mejoras

✅ Agregar más preguntas dinámicamente desde una base de datos.
✅ Implementar almacenamiento local para guardar el progreso del usuario.
✅ Mejorar la interfaz gráfica con animaciones y transiciones.
✅ Incluir un temporizador para cada pregunta y generar más desafío.

📝 Instrucciones para probar la aplicación

Abrir el navegador y acceder a: http://localhost:4321/

Responder las preguntas:

-Se mostrará una pregunta con múltiples opciones.

-Al seleccionar una opción, se enviará una solicitud a la API para validar la respuesta.

-Se actualizará el puntaje si la respuesta es correcta.

Finalizar la prueba:

-Una vez respondidas todas las preguntas, se mostrará la puntuación final.

-Se podrá reiniciar la prueba con un botón de "Reiniciar Test".

🛠️ Tecnologías Usadas

-Astro ⚡

-React ⚛️

-TypeScript 📝

-CSS 🎨
