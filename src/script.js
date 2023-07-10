const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginlink = document.querySelector('.login-link');
const loginButton = document.querySelector('.btnloginPopup');
const closeButton = document.querySelector('.icon-close');
const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];
const navbar = document.getElementsByClassName('navbar')[0];

registerLink.onclick = () => {
    wrapper.classList.add('active');
}

loginlink.onclick = () => {
    wrapper.classList.remove('active');
}

loginButton.onclick = () => {
    wrapper.classList.add('active-popup');
}

closeButton.onclick = () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
}

hamburgerMenu.addEventListener('click',() => {
    navbar.classList.toggle('active')
})