const menuDropDownItems = document.getElementsByClassName('drop-down-items')[0];
const aboutDropDownItems = document.getElementsByClassName('drop-down-items')[1];
const menuDropDownDiv = document.getElementsByClassName('appear-disappear')[0];
const aboutDropDownDiv = document.getElementsByClassName('appear-disappear')[1];

visibleHide(menuDropDownDiv, menuDropDownItems);
visibleHide(aboutDropDownDiv, aboutDropDownItems);


function visibleHide(element, dropDownItems) {
    dropDownItems.style.display = 'none';

element.addEventListener('mouseover', () => {
    dropDownItems.style.display = 'block';
});

element.addEventListener('mouseout', () => {
    dropDownItems.style.display = 'none';
});

}