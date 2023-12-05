function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const linkA = document.getElementById("link-a");
const linkB = document.getElementById("link-b");
const linkC = document.getElementById("link-c");
const linkD = document.getElementById("link-d");

linkA.addEventListener('click', () => {
    scrollToElement('header');
});

linkB.addEventListener('click', () => {
    scrollToElement('section', 0);
});

linkC.addEventListener('click', () => {
    scrollToElement('section', 1);
});

linkD.addEventListener('click', () => {
    scrollToElement('footer');
});