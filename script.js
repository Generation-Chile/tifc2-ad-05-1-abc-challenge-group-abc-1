function tresColores() {
    const colores = ["green", "blue", "red"];
    
    const elementos = document.querySelectorAll(".color");
    
    elementos.forEach(elemento => {
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        elemento.style.backgroundColor = colorAleatorio;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    tresColores();
});
/*Cuando alguien haga clic en cualquier etiqueta h5,cambie a 3 colores aleatorios repetibles: Verde, Azul y Rojo.*/

const h5Elements = document.querySelectorAll('h5');

function getRandomColor() {
  const colors = ['green', 'blue', 'red'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

h5Elements.forEach(h5 => {
  h5.addEventListener('click', () => {
    h5.style.color = getRandomColor();
  });
});