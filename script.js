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
