const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.app-navigation');
const body = document.body;

const toggleMenu = () => {
    hamburger.classList.toggle('open');
    navigation.classList.toggle('open');
    body.classList.toggle('hidden');
};

hamburger.addEventListener('click', toggleMenu);
