
export function setupNavigation(setCurrentSection) {
    const navLinks = document.querySelectorAll('#nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            setCurrentSection(targetId);
        });
    });
}