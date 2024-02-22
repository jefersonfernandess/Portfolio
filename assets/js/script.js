window.addEventListener('scroll', function () {
    const navBar = document.getElementById("navbarContainer");
    const scrollBarY = window.scrollY;
    if (scrollBarY > 4) {
        navBar.classList.remove('navBarContainerReverse');
        navBar.classList.add('navBarContainer');
        document.getElementById('navBar').style.marginTop = 0;
    }
    else {
        navBar.classList.remove('navBarContainer');
        navBar.classList.add('navBarContainerReverse');
        document.getElementById('navBar').style = "margin-top: 1rem !important";
    }
})
window.onload = function () {
    const navBar = document.getElementById("navbarContainer");
    navBar.classList.add('navBarContainerReverse');
};