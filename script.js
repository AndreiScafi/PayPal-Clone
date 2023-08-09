/* My Own Solution */
/* Navigation */
/* 
const dropdown = document.querySelectorAll('.dropdown-hover');

dropdown.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.classList.add('change');
    })
})

dropdown.forEach(element => {
    element.addEventListener('mouseout', () => {
        element.classList.remove('change');
    })
}) 
*/
/* End of Navigation */
/* End of My Own Solution */

/* Professor's Solution */

const dropdownItems = document.querySelectorAll('.dropdown-hover');

dropdownItems.forEach(dropdownItem => {
    dropdownItem.addEventListener('mouseover', () => {
        dropdownItem.lastElementChild.style.cssText = 'opacity: 1; visibility: visible';
        document.querySelector('.navbar-wrapper').style.background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)';
    })
})

dropdownItems.forEach(dropdownItem => {
    dropdownItem.addEventListener('mouseout', () => {
        dropdownItem.lastElementChild.style.cssText = 'opacity: 0; visibility: hidden';
        document.querySelector('.navbar-wrapper').style.background = 'transparent';
    })
})

/* End of Professor's Solution */