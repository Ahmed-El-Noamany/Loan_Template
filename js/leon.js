const menu = document.querySelector('.links');
const list = document.querySelector('ul');

menu.addEventListener('click', (e) => {
  list.classList.toggle('visible');
});
