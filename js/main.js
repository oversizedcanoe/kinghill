document.getElementById('hamburger-button').addEventListener('click', () =>{
    const navLinkDiv = document.querySelector('#mobile-nav-links');
    navLinkDiv.classList.toggle('show');

    const navLinks = document.querySelectorAll('.mobile-link');

    navLinks.forEach(el => {
        el.classList.toggle('show');
    })
});