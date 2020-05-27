$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 450) {
        $(".spec").addClass("stick");
        $(".otchet").addClass("hid");
        $("span.ic").removeClass("hid");

    } else {
        $(".spec").removeClass("stick");
        $(".otchet").removeClass("hid");
        $("span.ic").addClass("hid");
    }
});

let toggler = document.querySelectorAll('.menu-toggler'),
    submenu = document.querySelectorAll('.card-submenu');


for (let i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener('click', function () {
        submenu[i].classList.toggle('show-menu');
    });
}

let cardHeader = document.querySelectorAll('.horizontal-card > .card-header'),
    cardBody = document.querySelectorAll('.horizontal-card > .card-body'),
    windowWidth = window.document.body.clientWidth;
console.log(cardHeader);

window.addEventListener('DOMContentLoaded', function () {
    setInterval(function () {
        for (let i = 0; i < cardHeader.length; i++) {
            if (windowWidth > 568) {
                cardHeader[i].clientHeight = cardHeader[i].style.height;
                cardHeader[i].style.height = cardBody[i].clientHeight + 'px';
            } else {
                cardHeader[i].clientHeight = cardHeader[i].style.height;
                cardHeader[i].style.height = 25 + 'vh';
            }
            


        }
    }, 100);
});