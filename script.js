document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting me! I will get back to you soon.');
    form.reset();
  });
});
