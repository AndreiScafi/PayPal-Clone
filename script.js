/* My Own Solution */
/* Navigation */

const dropdown = document.querySelectorAll('.dropdown-hover');
const navbarWrapper = document.querySelector('.navbar-wrapper');

dropdown.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.classList.add('change');
        navbarWrapper.classList.add('change');
    })
})

dropdown.forEach(element => {
    element.addEventListener('mouseout', () => {
        element.classList.remove('change');
        navbarWrapper.classList.remove('change');
    })
})

/* End of Navigation */
/* Change Pages */

const login = document.querySelectorAll('.login');
const signup = document.querySelectorAll('.signup');
const logo = document.querySelectorAll('.logo');
const frontPage = document.querySelector('.front-page');
const loginPage = document.querySelector('.login-page');
const signupPage = document.querySelector('.signup-page');


login.forEach(item => {
    item.addEventListener('click', () => {
        frontPage.style.display = 'none';
        signupPage.style.display = 'none';
        loginPage.style.display = 'block';
    })
});

signup.forEach(item => {
    item.addEventListener('click', () => {
        frontPage.style.display = 'none';
        loginPage.style.display = 'none';
        signupPage.style.display = 'flex';

    })
});

logo.forEach(item => {
    item.addEventListener('click', () => {
        frontPage.style.display = 'block';
        loginPage.style.display = 'none';
        signupPage.style.display = 'none';
        console.log('clicked')

    })
});

/* End of Change Pages */
/* End of My Own Solution */

/* Professor's Solution */
/* 
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
 */
/* End of Professor's Solution */