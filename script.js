// Contador simple
let count = 0;
const counterBtn = document.getElementById('counter-btn');
const counterText = document.getElementById('counter-text');

counterBtn.addEventListener('click', () => {
    count++;
    counterText.textContent = `Contador: ${count}`;
    
    // Efecto visual
    counterBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        counterBtn.style.transform = 'scale(1)';
    }, 100);
});

// Cambio de color aleatorio del header cada 5 segundos
setInterval(() => {
    const header = document.querySelector('header');
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    header.style.backgroundColor = randomColor;
}, 5000);