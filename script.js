// Smooth scrolling for nav links
const links = document.querySelectorAll('nav ul li a');
for (const link of links) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
