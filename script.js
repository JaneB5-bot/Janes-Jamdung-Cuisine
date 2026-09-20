/* =========================================
   JANE'S JAMDUNG CUISINE
   SIMPLE WEBSITE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /*
        Smooth navigation
        automatically closes the mobile menu
        if one is added later.
    */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /*
        Small reveal animation
        for sections as they enter the screen.
    */

    const sections = document.querySelectorAll(
        ".menu-card, .story-content, .story-image, .gallery-item"
    );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    sections.forEach(section => {

        section.classList.add("hidden");

        observer.observe(section);

    });

});
