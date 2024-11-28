const hormonaButton = document.getElementById("hormona-button");
const navBarResponsive = document.querySelector(".nav-bar-responsive");
const menuButton = document.querySelector(".button-menu");
const instaButton = document.querySelector(".insta-button");
const firstLine = document.querySelector(".first-line");
const thirdLine = document.querySelector(".third-line");
const navList = document.querySelector(".nav-list");
const headerItem = document.querySelectorAll('.header-item');
const navItem = document.querySelectorAll('.nav-item');


/** funcion que despliega y repliega el menu hamburguesa */
const toggleMenu = () => {
    /** cada ve que se presiona el boton, como hay solo dos estados
     * agrega o quita las class del menu del estado avtivo */
    menuButton.classList.toggle('active-button-menu');
    firstLine.classList.toggle('active-first-line');
    thirdLine.classList.toggle('active-third-line');

    navBarResponsive.classList.toggle('active-nav-bar-responsive');
    navList.classList.toggle('active-nav-list');

    headerItem.forEach((e) => {
        e.classList.toggle('active-header-item')
    });

    /** agrego el evento para que una vez que se hizo click en el boton
     * para abrir el menu escuche si se hace click en otra parte del 
     * documento y si lo hace que ejecute nuevamente la funcion
     */
    document.addEventListener('mouseup', function(e) {
        if (!navBarResponsive.contains(e.target)) {
            toggleMenu();
        }
    });

};

document.documentElement.style.scrollBehavior = "smooth";

/** evento del boton de la card hormonas de treatments */
hormonaButton.addEventListener('click', (e) => {
    window.location.href = "/hormonas/hormonas-bioidenticas.html";
});

/** evento del boton para abrir y cerrar el menu hamburguesa */
menuButton.addEventListener('click', (e) => {
    toggleMenu();
});

/** evento para que cuando se hace click en cada item de la barra de 
 * navegacion se abra o cierre el menu hamburguesa */
navItem.forEach( navItem => {
    navItem.addEventListener('click', (e) => {
        toggleMenu();
    })
});

instaButton.addEventListener('click', (e) => {
    location.href = "https://www.instagram.com/dra.alimonmacarena/";
});