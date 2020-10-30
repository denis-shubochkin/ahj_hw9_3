const likeBut = document.querySelector('.like-button');
const main = document.querySelector('.main');

likeBut.addEventListener('click', () => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  main.appendChild(heart);
  heart.textContent = String.fromCodePoint(0x2764);
  const { top, left } = likeBut.getBoundingClientRect();
  heart.style.top = `${top}px`;
  heart.style.left = `${left + likeBut.offsetWidth / 2}px`;
  const num = Math.floor(Math.random() * 101);
  if (num <= 33) {
    heart.classList.add('heart-left');
  }
  if (num > 33 && num <= 66) {
    heart.classList.add('heart-center');
  }
  if (num >= 66) {
    heart.classList.add('heart-right');
  }
  heart.addEventListener('animationend', () => {
    heart.remove();
  });
});
