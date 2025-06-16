function abrirCarta() {
  const carta = document.getElementById("carta");
  carta.classList.add("mostrar");
  lanzarFlores();
}

function reproducirMusica() {
  const audio = document.getElementById("musica");
  audio.play();
}

function lanzarFlores() {
  const contenedor = document.getElementById("flores");

  for (let i = 0; i < 30; i++) {
    const flor = document.createElement("div");
    flor.classList.add("flor");
    flor.style.left = Math.random() * 100 + "vw";
    flor.style.animationDuration = 5 + Math.random() * 10 + "s";
    contenedor.appendChild(flor);

    setTimeout(() => {
      flor.remove();
    }, 15000);
  }
}
