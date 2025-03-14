const nameInputContainer = document.getElementById('name-input-container');
const nameInput = document.getElementById('nameInput');
const submitName = document.getElementById('submitName');

submitName.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name) {
        changeBackgroundColor();
        setTimeout(() => {
            window.location.href = `wish.html?name=${encodeURIComponent(name)}`;
        }, 1500); // Delay before redirecting
    } else {
        alert("Please enter your name.");
    }
});

function changeBackgroundColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}