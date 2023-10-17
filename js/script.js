

// Loading Header and Footer
$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    $("#socials").load("socials.html");
});


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


// Microsoft Clarity
(function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
    t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
})(window, document, "clarity", "script", "j6oi0l76n9");



// Google Analytics
const script = document.createElement('script');
script.async = true;
script.src = "https://www.googletagmanager.com/gtag/js?id=G-B1QD5KKPDC";
document.head.appendChild(script);

const script = document.createElement('script');
script.async = true;
script.src = "https://www.googletagmanager.com/gtag/js?id=G-B1QD5KKPDC";
document.head.appendChild(script);

script.onload = function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-B1QD5KKPDC');
};
