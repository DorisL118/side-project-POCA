const animateIcon = (event) => {
    const cartIcon = document.getElementById('cartIcon');
    const flyIcon = document.createElement('div');
    flyIcon.classList.add('fly-icon');
    document.body.appendChild(flyIcon);

    const btnRect = event.target.getBoundingClientRect();
    flyIcon.style.left = `${btnRect.left + btnRect.width / 2 }px`;
    flyIcon.style.top = `${btnRect.top + btnRect.height / 2 }px`;

    // 強制重繪以應用初始樣式
    flyIcon.offsetHeight;

    const cartRect = cartIcon.getBoundingClientRect();
    flyIcon.style.transform = `translate(${cartRect.left - btnRect.left}px, ${cartRect.top - btnRect.top}px)`;
    flyIcon.style.opacity = '0';

    flyIcon.addEventListener('transitionend', () => {
        flyIcon.remove();
    });
};