var textElement = document.querySelector('.scrolling-text');

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var elementOffset = textElement.offsetTop;
    if (scrollPosition >= elementOffset) {
        textElement.style.left = '0'; /* Move the div to the left when scrolled past its offset */
        textElement.style.opacity = '1'; /* Make the div visible */
    }
});
