const btn = document.getElementById('btn-crecer');
const garden = document.getElementById('flower-garden');
const mensaje = document.getElementById('mensaje');

btn.addEventListener('click', () => {
    btn.classList.add('hidden');
    mensaje.innerText = "Estas flores amarillas son para ti";
    
    // Crear 15 flores en posiciones locas
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const flower = document.createElement('div');
            flower.className = 'flower';
            flower.innerText = '🌻';
            flower.style.left = Math.random() * 80 + 10 + '%';
            flower.style.top = Math.random() * 50 + 20 + '%';
            garden.appendChild(flower);
        }, i * 200);
    }
    
    // Aquí puedes activar el contador de tiempo si quieres
    document.getElementById('contador').classList.remove('hidden');
});
