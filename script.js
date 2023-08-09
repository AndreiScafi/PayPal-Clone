/* My Own Solution */
/* Navigation */
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
/* End of Navigation */
/* End of My Own Solution */