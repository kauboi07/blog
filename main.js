//scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.js-reveal').forEach(el => observer.observe(el));

//glitch effect only for pc
const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

if (!isTouch) {
  const h1 = document.querySelector('.hero h1');

  function randomGlitch() {
    h1.style.animation = 'none';
    setTimeout(() => { h1.style.animation = ''; }, 50);
    setTimeout(randomGlitch, 3000 + Math.random() * 5000);
  }

  setTimeout(randomGlitch, 2000);
}
