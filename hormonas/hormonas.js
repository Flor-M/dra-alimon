const navBarResponsive = document.querySelector(".nav-bar-responsive");
const menuButton = document.querySelector(".button-menu");
const firstLine = document.querySelector(".first-line");
const thirdLine = document.querySelector(".third-line");
const navList = document.querySelector(".nav-list");
const headerItem = document.querySelectorAll('.header-item');
const navItem = document.querySelectorAll('.nav-item');

const indiceMenu = document.querySelector('.indice-group');
const indiceLine = document.querySelector('.middle-line');

const inicialSection = document.querySelector('.inicial-description-container');

const whatSection = document.querySelector('.what-container');
const whySection = document.querySelector('.why-container');
const pelletSection = document.querySelector('.pellet-container');
const whoSection = document.querySelector('.who-container');
const placementSection = document.querySelector('.placement-container');
const benefitsSection = document.querySelector('.benefits-container');
const aprovedSection = document.querySelector('.aproved-container');
const sintesisSection = document.querySelector('.sintesis-container');

const inicioItem = document.getElementById('indice-inicio');
const whatItem = document.getElementById('indice-what');
const whyItem = document.getElementById('indice-why');
const pelletItem = document.getElementById('indice-pellet');
const whoItem = document.getElementById('indice-who');
const placementItem = document.getElementById('indice-placement');
const benefitsItem = document.getElementById('indice-benefits');
const aprovedItem = document.getElementById('indice-aproved');
const sintesisItem = document.getElementById('indice-sintesis');


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
        };
    });

};

/** funcion que compara la altura total con la posicion actual */
const updateProgressBar = () => {
    const {scrollTop, scrollHeight} = (document.documentElement);

    let scrollPercent =  scrollTop / (scrollHeight - window.innerHeight) * 100;
    if (scrollPercent > 100) {
        scrollPercent = 100;
    };
    const scrollPercentCss = `${scrollPercent}%`

    /** actualizar la variable progress con la distancia calculada en la 
     * funcion anterior */
    document.querySelector('#progress-bar-fill').style.setProperty('--progress',scrollPercentCss);
};

/* 

DETECTAR EN QUE SECCION ESTOY
al hacer scroll ir chequeando la altura

ACTIVAR EL SPAN QUE CORRESPONDA
activar la seccion en la que se esta, agregandole esta clase
(sacar la clase de incide-inicio y usar toggle)

EVENTO EN LA SECCION QUE ESTA ACTIVA CLICK
cuando hago click ejecutar activeIndice

*/

const detectSectionScroll = () => {
    /** calcular la distancia entre el top de la pagina y el final 
     * del elemento indice */

    let pos_indice = indiceMenu.getBoundingClientRect();

    /** calcular la distancia entre el top de la pagina y el final de
     * cada section */
    let pos_inicial = inicialSection.getBoundingClientRect();
    let pos_what = whatSection.getBoundingClientRect();
    let pos_why = whySection.getBoundingClientRect();
    let pos_pellet = pelletSection.getBoundingClientRect();
    let pos_who = whoSection.getBoundingClientRect();
    let pos_placement = placementSection.getBoundingClientRect();
    let pos_benefits = benefitsSection.getBoundingClientRect();
    let pos_aproved = aprovedSection.getBoundingClientRect();
    let pos_sintesis = sintesisSection.getBoundingClientRect();

    /** restar la distancia del indice con la de la seccion
     * para calcular a que distancia esta la section del elemento indice
     */
    let distance_inicial = pos_inicial.bottom - pos_indice.bottom;
    let distance_what = pos_what.bottom - pos_indice.bottom;
    let distance_why = pos_why.bottom - pos_indice.bottom;
    let distance_pellet = pos_pellet.bottom - pos_indice.bottom;
    let distance_who = pos_who.bottom - pos_indice.bottom;
    let distance_placement = pos_placement.bottom - pos_indice.bottom;
    let distance_benefits = pos_benefits.bottom - pos_indice.bottom;
    let distance_aproved = pos_aproved.bottom - pos_indice.bottom;
    let distance_sintesis = pos_sintesis.bottom - pos_indice.bottom;

    console.log();

    /** almacenar en la variable min la distancia menos (el que esta mas cerca del 
     * elemento indice) */
    let min = Math.min(...[
        distance_inicial, 
        distance_what, 
        distance_why, 
        distance_pellet, 
        distance_who,
        distance_placement,
        distance_benefits,
        distance_aproved,
        distance_sintesis
    ].filter(num => num > 0));

    inicioItem.classList.remove('active-indice-menu');
    whatItem.classList.remove('active-indice-menu');
    whyItem.classList.remove('active-indice-menu');
    pelletItem.classList.remove('active-indice-menu');
    whoItem.classList.remove('active-indice-menu');
    placementItem.classList.remove('active-indice-menu');
    benefitsItem.classList.remove('active-indice-menu');
    aprovedItem.classList.remove('active-indice-menu');
    sintesisItem.classList.remove('active-indice-menu');

    if (min === distance_inicial) {
        inicioItem.classList.add('active-indice-menu');
    };
    if (min === distance_what) {
        whatItem.classList.add('active-indice-menu');
    };
    if (min === distance_why) {
        whyItem.classList.add('active-indice-menu');
    };
    if (min === distance_pellet) {
        pelletItem.classList.add('active-indice-menu');
    };
    if (min === distance_who) {
        whoItem.classList.add('active-indice-menu');
    };
    if (min === distance_placement) {
        placementItem.classList.add('active-indice-menu');
    };
    if (min === distance_benefits) {
        benefitsItem.classList.add('active-indice-menu');
    };
    if (min === distance_aproved) {
        aprovedItem.classList.add('active-indice-menu');
    };
    if (min === distance_sintesis) {
        sintesisItem.classList.add('active-indice-menu');
    };
    if (!Number.isFinite(min)) {
        sintesisItem.classList.add('active-indice-menu');
    }

};

/* 
toggleIndice
FUNCION PARA ABRIR Y CERRAR EL MENU 
- hacer toggle de la clase active-indice-group en indice-group
- hacer toggle de la clase active-middle-line en la linea
*/

const toggleIndice = () => {
    /** le agrego altura al menu */
    indiceMenu.classList.toggle('open-indice-group');
    /** posiciono los items */
    inicioItem.classList.toggle('open-indice-item');
    whatItem.classList.toggle('open-indice-item');
    whyItem.classList.toggle('open-indice-item');
    pelletItem.classList.toggle('open-indice-item');
    whoItem.classList.toggle('open-indice-item');
    placementItem.classList.toggle('open-indice-item');
    benefitsItem.classList.toggle('open-indice-item');
    aprovedItem.classList.toggle('open-indice-item');
    sintesisItem.classList.toggle('open-indice-item');
    /** le agrego altura a la linea */
    indiceLine.classList.toggle('open-middle-line');
    console.log('2');
};

/* 

activeIndice

FUNCION DEL MENU ACTIVO
1 DESPLEGAR MENU
ejecutar toggleIndice

2 ESPERAR CLICK EN CADA SPAN PARA LLEVAR A SECCION CORRESPONDIENTE
- traer por id los span
- hacer eventos para cada boton esperen el click para llevar a esa seccion
    al click:
    a - quitar a la seccion activa la clase activa
    b - activar el span que corresponda
    c - llevar a la seccion
    d - cerrar el menu: 
        ejecutar toggleIndice

3 CERRAR MENU SI SE TOCA AFUERA
ejecutar toggleIndice

*/

const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

const activeIndice = () => {

    toggleIndice();

    inicioItem.addEventListener('click', (e) => {
        topFunction();

    });

    whatItem.addEventListener('click', (e) => {
        whatSection.scrollIntoView();

    });

    whyItem.addEventListener('click', (e) => {
        whySection.scrollIntoView();

    });

    pelletItem.addEventListener('click', (e) => {
        pelletSection.scrollIntoView();

    });

    whoItem.addEventListener('click', (e) => {
        whoSection.scrollIntoView();

    });

    placementItem.addEventListener('click', (e) => {
        placementSection.scrollIntoView();

    });

    benefitsItem.addEventListener('click', (e) => {
        benefitsSection.scrollIntoView();

    });

    aprovedItem.addEventListener('click', (e) => {
        aprovedSection.scrollIntoView();

    });

    sintesisItem.addEventListener('click', (e) => {
        sintesisSection.scrollIntoView();

    });

    detectSectionScroll();
    
    document.addEventListener('mouseup', function(e) {

        if (!indiceMenu.contains(e.target)) {

            toggleIndice();

        };
    });

};

document.documentElement.style.scrollBehavior = "smooth";

window.addEventListener("load", detectSectionScroll);

/** evento del boton para abrir y cerrar el menu hamburguesa */
menuButton.addEventListener('click', (e) => {
    toggleMenu();
});

/** evento para que cuando se hace click en cada item de la barra de 
 * navegacion se abra o cierre el menu hamburguesa */
navItem.forEach( navItem => {
    navItem.addEventListener('click', (e) => {
        toggleMenu();
    });
});

/** evento que escucha el scroll para actualizar la barra de progreso */
document.addEventListener('scroll', updateProgressBar);

/** evento que escucha el scroll para activar los item segun section que se ve */
document.addEventListener('scroll', detectSectionScroll);

/** evento que escucha el click en indiceMenu para desplegar, cerrar el indice
 * y para que mientras este desplegado haga los eventlistener de cada item del indice
 */
indiceMenu.addEventListener('click', activeIndice);