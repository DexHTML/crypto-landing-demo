document.querySelectorAll('.faq-item h4').forEach(item => {
  item.addEventListener('click', () => {
    item.nextElementSibling.classList.toggle('show');
  });
});
