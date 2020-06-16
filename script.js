let menu = document.querySelector('.menu');

let nav = document.getElementById('nav');

let exit = document.getElementById('exit');

menu.addEventListener('click', function() {
    nav.classList.toggle('hide-mobile');
})

exit.addEventListener('click', function() {
    nav.classList.toggle('hide-mobile');
})