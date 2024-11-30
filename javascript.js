// Obtenemos el audio
const audio = document.getElementById("sound");

// Función que reproduce el gemido
function reproducirGemido() {
  audio.play();
}

// Añadir eventos para detectar cuando el mouse se mueve o se presiona una tecla
document.addEventListener('mousemove', reproducirGemido);  // Detecta el movimiento del mouse
document.addEventListener('keydown', reproducirGemido);   // Detecta cuando se presiona cualquier tecla
