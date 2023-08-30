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

/** variables que se utilizan en el carrousel
 * la animacion va trasladando en el eje x el contenedor de las cards 
 * del carrousel para que se muestren
 * 
 * cuando traigo las cards a js vienen en una NodeList por usar 
 * querySelectorAll por lo que hago uso del .length para operar
 * widthCard = longitud del nodelist cards dividido 100 me indica 
 * el porcentaje de ancho que utiliza cada card (ese porcentaje es
 * a ubicacion en x a la que tengo que ir moviendo el contenedor del
 * carrousel => slider en este archivo)
 * 
 * operation = variable que uso para almacenar la posicion en la que 
 * se tiene que trasladar el carrousel inicio en 0
 * 
 * counter = variable que uso para verificar la ubicacion del carrousel, 
 * el valor coincide con el indice de la card (que esta dentro de la nodelist)
 * que se esta mostrando en el carrousel
*/
let operation = 0;
let counter = 1;
let widthCard = 100 / cards.length;

/** funcion que actualiza el estado de los circulos por ser sólo dos circulos
 * solamente le hace toggle a la clase que muestra los circulitos 
 * con fondo marron */
const toggleCircles = () => {
    circleHormonas.classList.toggle('active-circle');
    circleGineco.classList.toggle('active-circle');
};

/** funcion que mueve el contenedor del carrousel a la derecha */
const moveToRight = () => {
    /** cada vez que se ejecuta evalua el valor de counter para
     * saber si tiene que redeclarar operation y trasladar el slider
     * a 0 (osea volver al inicio del carrousel porque estaba en la ultima 
     * posicion)
     * o 
     * aumentar el counter (asi el indice de la card que se muestra 
     * esta actualizado en la prox vuelta), sumarle a operation (que almacena
     * la ubicacion a la que se tiene que mover el slider) el width de una card 
     * para luego transladar el slider a esa posicion y mostrar la siguiente card
     * 
     * luego de trasladar siempre se ejecuta la funcion que actualiza el estado 
     * de los circulos
     */
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

/** funcion que mueve el contenedor del carrousel a la izq */
const moveToLeft = () => {
    /** cada vez que se ejecuta disminuye el valor de counter
     * luego lo evalua para saber si ya se encuentra en el inicio del
     * carrousel y debe transladarse al final
     * 
     * si es asi counter comienza como 1, se disminuye,
     * es 0 por lo que vuelve a declararla como el indice de la ultima card
     * y operación la declara como la ubicacion de la ultima card
     * 
     * si este es el total de las cards tengo que obtener la sigueinte 
     * ubicacion:
     * [    ][    ][    ][    ]
     *                   |
     * esta ubicacion es:
     * widthCard (width de cada car) x el anteultimo indice (length total -1)
     * de esa forma me trae la ubicacin donde COMIENZA la ultima card
     * y no donde termina, si yo pusiera widthCard x .length total me trae:
     * [    ][    ][    ][    ]
     *                        |
     * y luego, la funcion, traslada el slider
     * 
     * si evalua el counter y el slider se encuentra en otra posicion que 
     * no es la primera:
     * le resta a operation (que almacena la ubicacion a la que se 
     * tiene que mover el slider) el width de una card
     * para luego transladar el slider a esa posicion y mostrar 
     * la card anterior
     * 
     * luego de trasladar siempre se ejecuta la funcion que actualiza el estado 
     * de los circulos
     */
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

/** evento de la flecha izq del carousel de treatments */
arrowLeft.addEventListener('click', (e) => {
    moveToLeft();
});

/** evento de la flecha derecha del carousel de treatments */
arrowRight.addEventListener('click', (e) => {
    moveToRight();
});

/** evento del boton de la card hormonas de treatments */
hormonaButton.addEventListener('click', (e) => {
    window.location.href = "hormonas-bioidenticas.html";
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