const nome = "Nana";        

function mostrarSurpresa() {
    alert(`Você é especial demais, ${nome}! 💖 Nunca esqueça o quanto você é incrível! 💖`);
}

document.addEventListener("click", function tocarUmaVez() {
    const musica = document.getElementById("musica");
    musica.play();
    document.removeEventListener("click", tocarUmaVez);
});


function criarConfete() {
    const confete = document.createElement("div");
    confete.classList.add("confetti");

    confete.style.left = Math.random() * 100 + "vw";
    confete.style.backgroundColor = coresAleatorias();
    confete.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(confete);

    setTimeout(() => {
        confete.remove();
    }, 5000);
}

function coresAleatorias() {
    const cores = ["#ffffff", "#ff4e8a", "#ffd700", "#00ffff", "#ff7eb3"];
    return cores[Math.floor(Math.random() * cores.length)];
}

setInterval(criarConfete, 200);