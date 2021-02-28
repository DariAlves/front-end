const toggle = document.querySelector('.toggle');
const ul = document.querySelector('ul');
const fa = document.querySelector('.fa');

toggle.addEventListener('click', () => {
    ul.classList.toggle('active');
    fa.classList.toggle('fa-times')
})