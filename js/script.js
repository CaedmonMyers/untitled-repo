


// Inline link animations
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
                    // span.style.color = '#FF7438';
                    span.style.fontStyle = 'italic';
                    span.style.color = `rgb(${255 - (3/link.children.length*i)}, ${169 - (106/link.children.length*i)}, ${39 + (92/link.children.length*i)}, 1.0)`;
                }, i * 7);
            });
        });

        link.addEventListener('mouseout', () => {
            Array.from(link.children).forEach((span, i) => {
                setTimeout(() => {
                    span.style.color = 'white';
                    span.style.fontStyle = 'normal';
                }, i * 7);
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.titleText');

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
                    span.style.color = '#FC3F83';
                }, i * 30);
            });
        });

        link.addEventListener('mouseout', () => {
            Array.from(link.children).forEach((span, i) => {
                setTimeout(() => {
                    span.style.color = 'white';
                }, i * 30);
            });
        });
    });
});

// Loading Header and Footer
$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    $("#socials").load("socials.html");
});


// Microsoft Clarity
(function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
    t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
})(window, document, "clarity", "script", "j6oi0l76n9");




