let menu = document.querySelector('.menu');

let nav = document.getElementById('nav');

let exit = document.getElementById('exit');

menu.addEventListener('click', function() {
    nav.classList.toggle('hide-mobile');
})

exit.addEventListener('click', function() {
    nav.classList.toggle('hide-mobile');
})

let progress = document.getElementById("progressbar");

let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight)*100;
    progress.style.height = progressHeight + "%";
}
