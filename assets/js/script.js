window.addEventListener('scroll', function() {
    const scrollBarY = window.scrollY;
    if (scrollBarY > 4) {
        const navBar = document.getElementById("navbarContainer");
        navBar.classList.remove('container');
        document.getElementById('navBar').style.marginTop = 2;
    }
    else {
        const navBar = document.getElementById("navbarContainer");
        navBar.classList.add('container');
        navBar.style.transition = 5000;
    }
})

function scrollBarTransition() {
    
}
