document.querySelector(".hamburger").addEventListener("click", () => {
    let nav = document.querySelector(".header .wrapper .nav ul")
    nav.classList.toggle("active");
    document.querySelector("body").style.overflow = nav.classList.contains('active') ? "hidden" : "";
})