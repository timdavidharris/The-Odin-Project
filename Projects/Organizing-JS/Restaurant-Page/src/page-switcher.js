export default function pageSwitcher(home, menu, contact) {
    let homeDiv = home;
    let menuDiv = menu;
    let contactDiv = contact;
    let homeLink = document.querySelector('#nav-HOME');
    let menuLink = document.querySelector('#nav-MENU');
    let contactLink = document.querySelector('#nav-CONTACT');
    const pageLinks = document.querySelectorAll('.nav-link');
    (function setHomePage() {
        homeLink.style.color = '#5F9EA0';
        homeDiv.style.display = 'contents';
    })();
    pageLinks.forEach((link) => {
        link.addEventListener('click', () => {
            (function resetStyles() {
                homeDiv.style.display = 'none';
                menuDiv.style.display = 'none';
                contactDiv.style.display = 'none';
                homeLink.style.color = 'white';
                menuLink.style.color = 'white';
                contactLink.style.color = 'white';
            })();
            if (link.textContent === "HOME") {
                homeDiv.style.display = 'contents';
                homeLink.style.color = '#5F9EA0';
            } else if (link.textContent === "MENU") {
                menuDiv.style.display = 'contents';
                link.style.color = '#5F9EA0';
            } else if (link.textContent === "CONTACT") {
                contactDiv.style.display = 'contents';
                link.style.color = '#5F9EA0';
            }
        });
    });
}