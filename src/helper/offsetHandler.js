const nav = document.getElementById('mainNav');

function handleScroll() {
    if (window.scrollY > 100) {
        nav.classList.add('navbar-shrink');
        //document.body.style.paddingTop = nav.offsetHeight+'px';
    } else {
        nav.classList.remove('navbar-shrink');
        //document.body.style.paddingTop = 0;
    }
}

export default handleScroll;