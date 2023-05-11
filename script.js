function doSound() {
  const listaSom = document.querySelectorAll("audio");
  for (let i = 0; i < 9; i++) {
    return listaSom[i].play();
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (let i = 0; i < 9; i++) {
  listaDeTeclas[i].onclick = doSound;
  console.log(i);
}
