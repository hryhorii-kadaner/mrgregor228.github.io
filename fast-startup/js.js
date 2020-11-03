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

let botModalWrapper = document.querySelector('.bot-modal-wrapper'),
    botModalIWant = document.querySelector('.bot-modal-wrapper .bot-modal .bot-modal__description button:nth-of-type(1)'),
    botModalClose = document.querySelector('.bot-modal-wrapper .bot-modal .bot-modal__description button:nth-of-type(2)'),
    botModalButtonTrigger = document.querySelector("#shower button"),

    promoBox = document.querySelector('.promo-box'),
    promoClose = document.querySelector('.promo-close'),
    promoInput = document.getElementById('promo-input'),
    sendPromo = document.getElementById('send-promo'),
    promoActive = document.querySelector('.promo-active'),
    promoH4 = document.querySelector('.promo-box h4'),
    redText = document.querySelector('.red-text'),

    promo = "fast-startup-2020",
    promo_activated = false;

botModalClose.addEventListener('click', () => {
    botModalWrapper.style.cssText = "animation:hiderrr 1s 1 linear;";
    setTimeout(() => {
        botModalWrapper.style.cssText = "display:none;";
    }, 200);
});
botModalButtonTrigger.addEventListener('click', (e) => {
    botModalWrapper.style.cssText = "display:flex;animation:showwww 1s 1 linear;";
    e.target.closest('.modal-window').style.cssText = "animation:hiderrr 1s 1 linear;";
    setTimeout(() => {
        e.target.closest('.modal-window').style.cssText = "display:none;";
    }, 200);
});
botModalIWant.addEventListener('click', ()=>{
    window.open('https://t.me/MrGregorK');
});
sendPromo.addEventListener('click', () => {
    if (promoInput.value == promo) {
        console.log("active");
        promoInput.value = "";
        promoInput.remove();
        promoH4.remove();
        sendPromo.remove();
        promo_activated = true;
        promoActive.textContent = "Доступ к бонусам и доп материалам открыт!";
        redText.remove();
        localStorage.setItem("PromoActive", "true");
    } else {
        console.log("inactive");
        promoBox.style.right = "0%";
        redText.style.display = "block";
    }
});

if (localStorage.getItem("PromoActive")) {
    console.log("active");
    promoInput.value = "";
    promoInput.remove();
    promoH4.remove();
    sendPromo.remove();
    promo_activated = true;
    promoActive.textContent = "Доступ к бонусам и доп материалам открыт!";
    redText.remove();
    localStorage.setItem("PromoActive", "true");
    promoBox.style.right = "-100%";
} else {
    console.log("inactive");
    promoBox.style.right = "0%";
}

promoClose.addEventListener('click', () => {
    promoBox.style.right = "-100%";
});
toggler.forEach((item, i) => {
    item.addEventListener('click', function () {
        if (promo_activated == true) {
            submenu[i].classList.toggle('show-menu');
        } else {
            promoBox.style.right = "20px";
        }

    });
});

let cardHeader = document.querySelectorAll('.horizontal-card > .card-header'),
    cardBody = document.querySelectorAll('.horizontal-card > .card-body'),
    windowWidth = window.document.body.clientWidth;

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

let modalButton = document.getElementById('toggleModalRegistrationForm'),
    modalWindow = document.querySelector('#modalRegistrationForm');

function closeModal() {
    modalWindow.style.opacity = 0;
    setTimeout(function () {
        modalWindow.style.display = "none";
    }, 500);
}

modalButton.addEventListener('click', function () {

    modalWindow.style.display = "flex";
    setTimeout(function () {
        modalWindow.style.opacity = "1";
    }, 100);
});

let emailInput = document.querySelector('input[type="email"]'),
    nameInput = document.querySelector('input[name="Имя"]'),
    countryInput = document.querySelector('input[name="Откуда"]'),
    howDoYouKnowInput = document.querySelector('[name="Как узнали о марафоне"]'),
    nearestMasterInput = document.querySelector('input[name="Ближайший Мастер"]'),
    textAreaGoal = document.querySelector('textarea[name="Цель"]'),
    submitButton = document.querySelector('input[type="submit"]'),
    inputsRadio = document.querySelectorAll('input[name="Член клуба"]'),
    fieldEmail = document.querySelector('.email'),
    fieldName = document.querySelector('.fio'),
    fieldCountry = document.querySelector('.country'),
    fieldMembers = document.querySelector('.radio-buttons'),
    fieldHowDoYouKnow = document.querySelector('.howDoYouKnow'),
    fieldNearestMaster = document.querySelector('.nearestMaster'),
    fieldGoal = document.querySelector('.goal'),
    form = document.querySelector('.myForm'),
    shower = document.getElementById('shower');

function unfilledField(a) {
    a.classList.add('unFilledField');
}

function filledField(b) {
    b.classList.remove('unFilledField');
}

function submitButtonLock() {
    submitButton.setAttribute('disabled', 'disabled');
}

function submitButtonUnblock() {
    submitButton.removeAttribute('disabled', 'disabled');
}

function checkName() {
    if (nameInput.value.length <= 6) {
        unfilledField(fieldName);
        submitButtonLock();
        nameInput.placeholder = "Необходимо заполнить поле корректно!";
    } else {
        filledField(fieldName);
        submitButtonUnblock();
        nameInput.placeholder = "";
    }
}

function checkEmail() {
    if (emailInput.value.indexOf('@') == -1 || emailInput.value.length <= 5) {
        unfilledField(fieldEmail);
        emailInput.placeholder = "Необходимо заполнить поле корректно!";
    } else {
        filledField(fieldEmail);
        emailInput.placeholder = "";
    }
}

function checkCountry() {
    if (countryInput.value.length <= countryInput.minLength) {
        unfilledField(fieldCountry);
        countryInput.placeholder = "Необходимо указывать страну и город через запятую!";
    } else {
        filledField(fieldCountry);
        countryInput.placeholder = "";
    }
}

function checkMember() {
    unfilledField(fieldMembers);
    for (let i = 0; i < inputsRadio.length; i++) {
        if (inputsRadio[i].checked == true) {
            filledField(fieldMembers);
        }
    }
}

function checkHowDoYouKnow() {
    if (howDoYouKnowInput.value.length <= howDoYouKnowInput.minLength) {
        unfilledField(fieldHowDoYouKnow);
        howDoYouKnowInput.placeholder = "Длинна сообщения менее 4 символов!";
    } else {
        filledField(fieldHowDoYouKnow);
        howDoYouKnowInput.placeholder = "";
    }
}

function checkNearestMaster() {
    if (nearestMasterInput.value.length <= nearestMasterInput.minLength) {
        unfilledField(fieldNearestMaster);
        nearestMasterInput.placeholder = "Длинна сообщения менее 8 символов!";
    } else {
        filledField(fieldNearestMaster);
        nearestMasterInput.placeholder = "";
    }
}

function checkTextArea() {
    if (textAreaGoal.value.length <= textAreaGoal.minLength) {
        unfilledField(fieldGoal);
        textAreaGoal.placeholder = "Длинна сообщения менее 40 символов!";
    } else if (textAreaGoal.value.length > textAreaGoal.maxLength) {
        unfilledField(fieldGoal);
        textAreaGoal.placeholder = "Длинна сообщения более 250 символов!";
    } else {
        filledField(fieldGoal);
        textAreaGoal.placeholder = "";
    }
}

setInterval(function () {
    for (let i = 0; i < inputsRadio.length; i++) {


        if (inputsRadio[i].checked == true || nameInput.value.length <= 6 || emailInput.value.indexOf('@') == -1 || emailInput.value.length <= 5 || countryInput.value.length <= countryInput.minLength || howDoYouKnowInput.value.length <= howDoYouKnowInput.minLength || nearestMasterInput.value.length <= nearestMasterInput.minLength || textAreaGoal.value.length <= textAreaGoal.minLength || textAreaGoal.value.length > textAreaGoal.maxLength) {
            submitButton.setAttribute('disabled', 'disabled');
        } else {
            submitButton.removeAttribute('disabled', 'disabled');
        }
    }
}, 100);

function hideshow() {
    form.style.cssText = "animation:hiderrr 1s 1 linear;display:none;";
    shower.style.cssText = "display:block;animation:showwww 1s 1 linear;";
}