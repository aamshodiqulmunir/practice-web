const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginlink = document.querySelector('.login-link');
const loginButton = document.querySelector('.btnloginPopup');
const closeButton = document.querySelector('.icon-close');

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