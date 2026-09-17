const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

menuButton.addEventListener("click", function () {

    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );

});


document.querySelectorAll(".nav a").forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


document.getElementById("year").textContent =
    new Date().getFullYear();
