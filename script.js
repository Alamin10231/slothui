
  document.querySelectorAll('.question-content').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

