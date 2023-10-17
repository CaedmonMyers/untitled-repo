const buttons = document.querySelectorAll('.custom-button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', (e) => {
        const cursorEffect = document.createElement('div');
        cursorEffect.classList.add('cursor-effect');
        button.appendChild(cursorEffect);

        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        cursorEffect.style.width = cursorEffect.style.height = `${size}px`;

        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        cursorEffect.style.left = `${x}px`;
        cursorEffect.style.top = `${y}px`;

        cursorEffect.addEventListener('transitionend', () => {
            cursorEffect.remove();
        });
    });
});
