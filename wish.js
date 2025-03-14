const holiWish = document.getElementById('holi-wish');
const holiQuote = document.getElementById('holi-quote');
const colorSpray = document.getElementById('colorSpray');

const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');

const quotes = [
    "Wishing you a joyful and safe Holi filled with love and light!",
    "Let's make this Holi a day to remember with colours of happiness!",
    "Holi is the festival of unity—spread love, share smiles, and enjoy the day!",
    "May your Holi be filled with beautiful moments and cherished memories!"
];

if (name) {
    let coloredName = 'Happy Holi, ';
    for (const char of name) {
        coloredName += `<span class="name-letter" style="color: ${getRandomColor()}">${char}</span>`;
    }
    coloredName += '!';
    holiWish.innerHTML = coloredName;
    holiQuote.textContent = quotes[Math.floor(Math.random() * quotes.length)];
}

// Color Spray - Blast Effect
colorSpray.addEventListener('click', () => {
    blastColors();
});

function blastColors() {
    const burstCount = 80;
    const pageWidth = document.documentElement.scrollWidth;
    const pageHeight = document.documentElement.scrollHeight;

    for (let i = 0; i < burstCount; i++) {
        const colorDiv = document.createElement('div');
        colorDiv.style.position = 'absolute';
        colorDiv.style.width = '12px';
        colorDiv.style.height = '12px';
        colorDiv.style.backgroundColor = getRandomColor();
        colorDiv.style.left = `${Math.random() * pageWidth}px`;
        colorDiv.style.top = `${Math.random() * pageHeight}px`;
        colorDiv.style.borderRadius = '50%';
        colorDiv.style.opacity = 0;
        colorDiv.style.transform = `translate(-50%, -50%)`;
        document.body.appendChild(colorDiv);

        // Animation for a sudden appearance
        colorDiv.animate([
            { opacity: 0, transform: 'translate(-50%, -50%) scale(0.5)' },
            { opacity: 1, transform: 'translate(-50%, -50%) scale(1.2)' },
            { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
        ], {
            duration: Math.random() * 300 + 200,
            easing: 'ease-out',
            fill: 'forwards'
        });

        // Fading out after a delay
        setTimeout(() => {
            colorDiv.animate([
                { opacity: 1 },
                { opacity: 0 }
            ], {
                duration: 500,
                easing: 'ease-out',
                fill: 'forwards'
            });
        }, Math.random() * 800 + 500);
    }
}

// Name Interaction - Wobble Effect
const nameLetters = document.querySelectorAll('.name-letter');

nameLetters.forEach(letter => {
    letter.addEventListener('mouseover', () => {
        const wobbleAmount = 5;
        const randomX = Math.random() * wobbleAmount - wobbleAmount / 2;
        const randomY = Math.random() * wobbleAmount - wobbleAmount / 2;
        letter.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomX / 2}deg)`;

        setTimeout(() => {
            letter.style.transform = '';
        }, 100);
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Background color change function.
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

setInterval(changeBackgroundColor, 900);