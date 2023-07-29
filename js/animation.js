const items = document.querySelectorAll('.animate');

function handleScroll() {
    items.forEach(item => {
        if (isElementInViewport(item)) {
            item.classList.add('is-visible');
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', handleScroll);