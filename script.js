document.addEventListener('mousemove', rippleEffect);

function rippleEffect(e) {
  const water = document.querySelector('.water');
  const ripple = document.createElement('span');
  const rect = water.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';

  water.appendChild(ripple);

  ripple.addEventListener('animationend', () => {
    ripple.remove();
  });
}
