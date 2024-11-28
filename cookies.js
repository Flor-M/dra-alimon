const cookiesButton = document.querySelector(".cookie-btn");
const cookiesBanner = document.querySelector(".cookie-width");
const cookiesBackground = document.getElementById("backgroundCookies");

dataLayer = [];

if (!document.cookie.includes('acceptedAli')) {
    cookiesBanner.classList.add('cookie-activo');
    cookiesBackground.classList.add('cookie-activo');
} else {
    dataLayer.push({'event' : 'cookies-aceptadas'});
};

cookiesButton.addEventListener('click', (e) => {
    cookiesBanner.classList.remove('cookie-activo');
    cookiesBackground.classList.remove('cookie-activo');

    document.cookie = "cookieGA= acceptedAli; max-age=" + 60 * 60 * 24 * 30;
    // localStorage.setItem('cookiesAceptadas', true);

    dataLayer.push({'event' : 'cookies-aceptadas'});

});