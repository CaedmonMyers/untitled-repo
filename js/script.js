document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.inlineLink');

    links.forEach(link => {
        const text = link.textContent;
        link.innerHTML = '';

        Array.from(text).forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.color = 'white';
            link.appendChild(span);
        });

        link.addEventListener('mouseover', () => {
            Array.from(link.children).forEach((span, i) => {
                setTimeout(() => {
                    span.style.color = '#FF7438';
                }, i * 7);
            });
        });

        link.addEventListener('mouseout', () => {
            Array.from(link.children).forEach((span, i) => {
                setTimeout(() => {
                    span.style.color = 'white';
                }, i * 7);
            });
        });
    });
});


$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    $("#socials").load("socials.html");
});