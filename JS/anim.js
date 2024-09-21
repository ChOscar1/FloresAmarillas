// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Sólo porqué vagué por el desierto", time: 7 },
  { text: "Hasta que te encontré", time: 10 },
  { text: "Me diste cobijo bajo una palmera", time: 17 },
  { text: "Y me diste de beber", time: 21 },
  { text: "Si algo no sale bien, serás mi constante", time: 27.4 },
  { text: "Sólo porque no doy detalles y vivo como un rey", time: 37.1 },
  { text: "Sé reconocer mi palacio de jade", time: 44.2 },  
  { text: "Hoy te elijo a ti para estar en mi vida", time: 49 },
  { text: "Te elijo cada día consciente y libremente", time: 54 },
  { text: "Mi amor no será un problema jamás", time: 57 },
  { text: "El problema jamás", time: 60 },
  { text: "Sólo porque curaste mis heridas", time: 71 },
  { text: "Y tu anatomía fue mi medicina", time: 76 },
  { text: "Y remedio para todo", time: 79 },
  { text: "Mi bálsamo del Perú", time: 84 },
  { text: "Si algo no sale bien serás mi constante", time: 91 },
  { text: "Sólo porque este es el mejor de todos los posibles", time: 104 },
  { text: "Accidentes del azar, opción infalible", time: 111 },
  { text: "Hoy te elijo a ti para estar en mi vida", time: 117 },
  { text: "Te elijo cada día consciente y libremente", time: 121 },
  { text: "Mi amor no será un problema jamás", time: 126 },
  { text: "El problema jamás", time: 130 },
  { text: "Si algo no sale bien", time: 155 },//todas listas
  { text: "Hoy te elijo a ti para estar en mi vida", time: 163 },
  { text: "Te elijo cada día consciente y libremente", time: 167 },
  { text: "Mi amor no será un problema jamás", time: 172 },
  { text: "El problema jamás", time: 174 },
];



// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);