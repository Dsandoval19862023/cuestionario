const preguntas = [
    {
      pregunta: "¿Cuál es el lenguaje principal del navegador?",
      respuestas: ["JavaScript", "Python", "C++", "Java"],
      correcta: 0
    },
    {
      pregunta: "¿Qué etiqueta se usa para crear un párrafo en HTML?",
      respuestas: ["<div>", "<h1>", "<p>", "<span>"],
      correcta: 2
    },
    {
      pregunta: "¿Cuál es la forma correcta de declarar una variable en JS?",
      respuestas: ["let variable;", "var: variable;", "define variable;", "v variable;"],
      correcta: 0
    },
    {
        pregunta: "¿Qué propiedad de CSS se usa para cambiar el color del texto?",
        respuestas: ["color", "font-color", "text-color", "background-color"],
        correcta: 0
      },
      {
        pregunta: "¿Qué método se usa para imprimir algo en la consola en JavaScript?",
        respuestas: ["print()", "console.log()", "log.console()", "echo()"],
        correcta: 1
      },
      {
        pregunta: "¿Qué significa HTML?",
        respuestas: ["HyperText Markdown Language", "HyperText Makeup Language", "HyperText Markup Language", "HighText Markup Language"],
        correcta: 2
      },
      {
        pregunta: "¿Cuál de estos no es un tipo de dato en JavaScript?",
        respuestas: ["string", "boolean", "float", "undefined"],
        correcta: 2
      },
      {
        pregunta: "¿Qué etiqueta HTML se usa para insertar una imagen?",
        respuestas: ["<img>", "<image>", "<src>", "<pic>"],
        correcta: 0
      }
  ];
  
  let indiceActual = 0;
  let puntaje = 0;
  const preguntaElem = document.getElementById("pregunta");
const respuestasElem = document.getElementById("respuestas");
const siguienteBtn = document.getElementById("siguiente");
const resultadoElem = document.getElementById("resultado");
const reiniciarBtn = document.getElementById("reiniciar");

function mostrarPregunta() {
  const actual = preguntas[indiceActual];
  preguntaElem.textContent = actual.pregunta;
  respuestasElem.innerHTML = "";

  actual.respuestas.forEach((respuesta, i) => {
    const boton = document.createElement("button");
    boton.textContent = respuesta;
    boton.onclick = () => verificarRespuesta(i);
    respuestasElem.appendChild(boton);
  });
}

function verificarRespuesta(seleccionado) {
  const correcta = preguntas[indiceActual].correcta;
  const botones = respuestasElem.querySelectorAll("button");

  botones.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correcta) btn.classList.add("correcta");
    else if (i === seleccionado) btn.classList.add("incorrecta");
  });

  if (seleccionado === correcta) {
    puntaje++;
  }
}

siguienteBtn.onclick = () => {
  indiceActual++;
  if (indiceActual < preguntas.length) {
    mostrarPregunta();
  } else {
    mostrarResultado();
  }
};
reiniciarBtn.onclick = () => {
    indiceActual = 0;
    puntaje = 0;
    resultadoElem.textContent = "";
    reiniciarBtn.style.display = "none";
    siguienteBtn.style.display = "inline";
    mostrarPregunta();
  };
  
  function mostrarResultado() {
    preguntaElem.textContent = "";
    respuestasElem.innerHTML = "";
    resultadoElem.textContent = `Obtuviste ${puntaje} de ${preguntas.length} puntos.`;
    siguienteBtn.style.display = "none";
    reiniciarBtn.style.display = "inline";
  }
  
  mostrarPregunta();