const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slider = document.querySelector(".carrousel-container");
const cards = document.querySelectorAll(".carrousel-content");

let operation = 0;
let counter = 1;
let widthCard = 100 / cards.length;

const moveToRight = () => {

    if (counter >= cards.length) {
        counter = 1;
        operation = 0;
        slider.style.transform = `translate(-${operation}%)`;
        slider.style.transition = 'none';
        return;
    };
    counter++;
    operation = operation + widthCard;
    slider.style.transform = `translate(-${operation}%)`;
    slider.style.transition = 'all ease .6s';
    
};

const moveToLeft = () => {

    counter--;
    if (counter < 1) {
        counter = cards.length;
        operation = widthCard * (cards.length-1);
        slider.style.transform = `translate(-${operation}%)`;
        slider.style.transition = 'none';
        return;
    };
    operation = operation - widthCard;
    slider.style.transform = `translate(-${operation}%)`;
    slider.style.transition = 'all ease .6s';
};

arrowLeft.addEventListener('click', (e) => {
    moveToLeft();
});

arrowRight.addEventListener('click', (e) => {
    moveToRight();
});