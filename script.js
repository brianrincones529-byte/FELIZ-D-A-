const btn = document.getElementById('btn-crecer');
const garden = document.querySelector('body');
const mensaje = document.getElementById('mensaje');

btn.addEventListener('click', () => {
    // Escondemos el botón y cambiamos el mensaje
    btn.style.display = 'none';
    mensaje.innerText = "🌻 Estas flores amarillas son para ti 🌻";
    mensaje.style.color = "#FFD700";

    // Creamos 25 flores en posiciones aleatorias
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const flower = document.createElement('div');
            flower.className = 'flower';
            flower.innerText = '🌻';
            
            // Posiciones al azar en la pantalla
            flower.style.left = Math.random() * 90 + 'vw';
            flower.style.top = Math.random() * 80 + 'vh';
            
            garden.appendChild(flower);
        }, i * 150); // Las flores salen una tras otra
    }
});
