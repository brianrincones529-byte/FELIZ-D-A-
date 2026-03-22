<svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes abrir {
      0% { transform: scale(0) rotate(0deg); opacity: 0; }
      50% { transform: scale(1.2) rotate(45deg); opacity: 1; }
      100% { transform: scale(1) rotate(0deg); opacity: 1; }
    }
    @keyframes aparecerTexto {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .petalo { 
      fill: #FF69B4; 
      transform-origin: center; 
      animation: abrir 3s ease-out forwards;
    }
    .centro { 
      fill: #FFD700; 
      transform-origin: center;
      animation: abrir 2s ease-out forwards;
    }
    .texto {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight: bold;
      fill: #D81B60;
      font-size: 40px;
      opacity: 0;
      animation: aparecerTexto 1.5s ease-in 2.5s forwards;
    }
  </style>

  <rect x="245" y="350" width="10" height="150" fill="#4CAF50" />
  
  <circle class="petalo" cx="250" cy="200" r="50" style="animation-delay: 0.2s" />
  <circle class="petalo" cx="300" cy="250" r="50" style="animation-delay: 0.4s" />
  <circle class="petalo" cx="250" cy="300" r="50" style="animation-delay: 0.6s" />
  <circle class="petalo" cx="200" cy="250" r="50" style="animation-delay: 0.8s" />
  
  <circle class="centro" cx="250" cy="250" r="40" />

  <text x="50%" y="150" text-anchor="middle" class="texto">¡Feliz Día!</text>
</svg>
