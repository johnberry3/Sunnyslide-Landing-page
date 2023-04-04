const bar = document.getElementById('menu-bar')
const menu = document.querySelector('.overlay');

function openMenu(){
    menu.classList.toggle('show')
}

bar.addEventListener("click", openMenu);