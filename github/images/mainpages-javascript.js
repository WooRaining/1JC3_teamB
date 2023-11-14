var navLinks = document.querySelectorAll('nav a');
var body = document.querySelector('body');

navLinks.forEach(function(link) {
    link.addEventListener('mouseover', function() {
        body.classList.add('blur-effect');
    });

    link.addEventListener('mouseout', function() {
        body.classList.remove('blur-effect');
    });
});