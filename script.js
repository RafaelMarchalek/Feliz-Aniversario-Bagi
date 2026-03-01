const nome = "Nana";        

function mostrarSurpresa() {
    alert(`Você é especial demais, ${nome}! 💖 Nunca esqueça o quanto você é incrível! 💖`);
}

document.addEventListener("click", function tocarUmaVez() {
    const musica = document.getElementById("musica");
    musica.play();
    document.removeEventListener("click", tocarUmaVez);
});