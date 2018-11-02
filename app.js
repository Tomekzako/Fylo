window.addEventListener('DOMContentLoaded', function () {
    const image = document.querySelector('.products__banner');

    function slideIn() {
        const offsetTop = image.getBoundingClientRect().top + document.documentElement.scrollTop;
        const slideInAt = (window.scrollY + window.innerHeight) - image.clientHeight / 2;
        const isHalfShown = slideInAt > offsetTop;
        if (isHalfShown) {
            image.classList.add('active');
        }
    }


    window.addEventListener('scroll', slideIn);
});