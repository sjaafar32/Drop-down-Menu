const dropDownItems = document.getElementById('drop-down-items');
const menu = document.getElementById('menu');

dropDownFunction(dropDownItems);

function dropDownFunction(element) {
element.addEventListener('mouseover', () => {
    document.documentElement.style.setProperty('--display', 'flex');
});

element.addEventListener('mouseout', () => {
    document.documentElement.style.setProperty('--display', 'none')
});

}