const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slider = document.querySelector(".carrousel-container");
const cards = document.querySelectorAll(".carrousel-content");
const hormonaButton = document.getElementById("hormona-button");
const navBarResponsive = document.querySelector(".nav-bar-responsive");
const menuButton = document.querySelector(".button-menu");
const firstLine = document.querySelector(".first-line");
const thirdLine = document.querySelector(".third-line");
const navList = document.querySelector(".nav-list");
const headerItem = document.querySelectorAll('.header-item');
const navItem = document.querySelectorAll('.nav-item');
const circleHormonas = document.querySelector('.tiny-circle-hormonas');
const circleGineco = document.querySelector('.tiny-circle-gineco');

let operation = 0;
let counter = 1;
let widthCard = 100 / cards.length;

const toggleCircles = () => {
    circleHormonas.classList.toggle('active-circle');
    circleGineco.classList.toggle('active-circle');
};

const moveToRight = () => {
    // console.log('inicio mover der', counter);
    if (counter >= cards.length) {
        // console.log('mayor mover der', counter);
        counter = 1;
        operation = 0;
        slider.style.transform = `translate(-${operation}%)`;
        slider.style.transition = 'none';
        // console.log('donde quedo mayor mover der', counter);

        toggleCircles();

        return;
    };

    counter++;
    // console.log('menor mover der', counter);
    operation = operation + widthCard;
    slider.style.transform = `translate(-${operation}%)`;
    slider.style.transition = 'all ease .6s';
    // console.log('donde quedo menor mover der', counter);

    toggleCircles();

};

const moveToLeft = () => {
    // console.log('inicio mover izq', counter);
    counter--;

    if (counter < 1) {
        // console.log('menor a 1 mover izq', counter);
        counter = cards.length;
        operation = widthCard * (cards.length-1);
        slider.style.transform = `translate(-${operation}%)`;
        slider.style.transition = 'none';
        // console.log('donde quedo menor mover izq', counter);

        toggleCircles();

        return;
    };
    // console.log('mayor a 1 mover izq', counter);
    operation = operation - widthCard;
    slider.style.transform = `translate(-${operation}%)`;
    slider.style.transition = 'all ease .6s';
    // console.log('donde quedo mayor a 1 mover izq', counter);

    toggleCircles();
    
};

const toggleMenu = () => {
    
    menuButton.classList.toggle('active-button-menu');
    firstLine.classList.toggle('active-first-line');
    thirdLine.classList.toggle('active-third-line');

    navBarResponsive.classList.toggle('active-nav-bar-responsive');
    navList.classList.toggle('active-nav-list');
    
    headerItem.forEach((e) => {
        e.classList.toggle('active-header-item')
    });

    document.addEventListener('mouseup', function(e) {
        if (!navBarResponsive.contains(e.target)) {
            toggleMenu();
        }
    });

};


arrowLeft.addEventListener('click', (e) => {
    moveToLeft();
});

arrowRight.addEventListener('click', (e) => {
    moveToRight();
});

hormonaButton.addEventListener('click', (e) => {
    window.location.href = "hormonas-bioidenticas.html";
});

menuButton.addEventListener('click', (e) => {
    toggleMenu();
});

navItem.forEach( navItem => {
    navItem.addEventListener('click', (e) => {
        toggleMenu();
    })
});