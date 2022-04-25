function randomRGB() {
    //this will give a whole number instead of a dicimal.
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// const h1 = document.querySelector('h1');
// h1.style.color = randomRGB();

// setInterval(function () {
//     h1.style.color = randomRGB();
// }, 500);

const letters = document.querySelectorAll('.letter');

const intervalId = setInterval(function () {
    for (let letter of letters) {
        letter.style.color = randomRGB();
    }
}, 1000);