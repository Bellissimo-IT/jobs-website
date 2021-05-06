let body = document.querySelector('body'), navMobile = document.querySelector('.nav-items-mobile'), burger = document.querySelector('.burger');

function  navActivate() {
    body.classList.toggle('active');
    navMobile.classList.toggle('active');
    burger.classList.toggle('active');
}

let year = new Date().getFullYear(), textYear = document.getElementById('currentYear');

textYear.innerHTML = year;