
const btn = document.querySelector('.hamburger-icon');
const sidenav = document.querySelector('.sidenav');
const close = document.querySelector('.sidenav__close');

btn.addEventListener('click', sidemenu);
close.addEventListener('click', closeBtn);

function sidemenu() {
    sidenav.style.height = "100%";
    sidenav.style.width = "100%";
    sidenav.style.right = "0";
    btn.style.opacity = "0";
}

function closeBtn() {
    sidenav.style.width = "0";
    sidenav.style.height = "0";
    sidenav.style.right = "-25rem";
    btn.style.opacity = "1";
}