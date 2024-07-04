document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu-link');

    function setActiveClass() {
        let activeIndex = -1; // No active index initially
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 50 && rect.bottom >= 50) { // 50px from the top of the viewport
                activeIndex = index;
            }
        });

        navLinks.forEach((link, index) => {
            if (index === activeIndex) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            } else {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
            }
        });
    }

    // Scroll to sections with smooth behavior
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    window.addEventListener('scroll', setActiveClass);
});
