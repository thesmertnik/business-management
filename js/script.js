(function () {
    //*** PATH
    const PATH = {
        closeToggler: ".toggler-close",
        expandableNav: ".main-nav__expandable",
        navItem: ".main-nav__item",
        openToggler: ".toggler-open"
    };

    // *** HELPERS
    const editDataAttr = (elem, dataAttr, newVal) => {
        elem.dataset[dataAttr] = newVal;
    };

    const setDataAtrsToNavElems = () => {
        const navElems = Array.from(document.querySelectorAll(PATH.navItem));

        navElems.forEach((elem, index) => {
            editDataAttr(elem, "addText", `0${index + 1}`);
        });
    };

    setDataAtrsToNavElems();

    // *** EVENT LISTENERS
    document.body.addEventListener("click", (e) => {
        const target = e.target;

        if (target.closest(PATH.openToggler)) {
            const nav = document.querySelector(PATH.expandableNav);
            nav.classList.add("js-open");
        }

        if (target.closest(PATH.closeToggler)) {
            const nav = document.querySelector(PATH.expandableNav);
            nav.classList.remove("js-open");
        }
    });
})();


window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.fade-in');
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    }
});
function isElementInViewport(element) {
    let rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

