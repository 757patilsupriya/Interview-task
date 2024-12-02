
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    box.classList.toggle('expanded');
  });

  box.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      box.classList.toggle('expanded');
    }
  });

  box.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', (event) => {
      const color = event.target.getAttribute('data-color');
      box.style.backgroundColor = color;
      event.stopPropagation(); 
    });
  });
});
