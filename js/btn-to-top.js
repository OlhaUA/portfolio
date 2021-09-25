const toTop = document.querySelectorAll('.to-top');

toTop.forEach((btn) => {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      btn.classList.add('active');
    } else btn.classList.remove('active');
  });
});
