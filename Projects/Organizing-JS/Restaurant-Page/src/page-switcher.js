export default function pageSwitcher(home, menu, contact) {
    let homeDiv = home;
    let menuDiv = menu;
    let contactDiv = contact;
    const pageLinks = document.querySelectorAll('.nav-link');
    pageLinks.forEach((link) => {
        link.addEventListener('click', () => {
            homeDiv.style.display = 'none';
            menuDiv.style.display = 'none';
            contactDiv.style.display = 'none';
            if (link.textContent === "HOME") {
                homeDiv.style.display = 'contents';
                link.style.color = '#5F9EA0';
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