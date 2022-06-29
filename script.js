const dropDownItems = document.getElementById('drop-down-items');
const menu = document.getElementById('menu');

menu.addEventListener('click', () => {
    document.documentElement.style.setProperty('--display', 'none');
})