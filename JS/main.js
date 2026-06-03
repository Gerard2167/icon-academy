/* =====================================
   AOS ANIMATIONS
===================================== */

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

/* =====================================
   NAVBAR SCROLL EFFECT
===================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

/* =====================================
   MOBILE MENU
===================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuToggle.innerHTML = '<i class="fas fa-times"></i>';
    }else{
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }

});

/* =====================================
   CLOSE MENU AFTER CLICK
===================================== */

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.innerHTML =
        '<i class="fas fa-bars"></i>';

    });

});

/* =====================================
   COUNTER ANIMATION
===================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target =
            Number(counter.dataset.target);

            let current = 0;

            const increment =
            target / 100;

            const updateCounter = () => {

                if(current < target){

                    current += increment;

                    counter.innerText =
                    Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

},

{
    threshold:0.5
}

);

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/* =====================================
   SMOOTH SCROLL
===================================== */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click",

    function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

    });

});

/* =====================================
   HERO PARALLAX EFFECT
===================================== */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    let offset = window.pageYOffset;

    hero.style.backgroundPositionY =
    offset * 0.5 + "px";

});

/* =====================================
   IMAGE HOVER EFFECT
===================================== */

const galleryImages =
document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform =
        "scale(1.05)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform =
        "scale(1)";

    });

});

/* =====================================
   FADE-IN CONTACT FORM
===================================== */

const contactSection =
document.querySelector(".contact");

const formObserver =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            contactSection.classList.add("visible");

        }

    });

},

{
    threshold:0.2
}

);

formObserver.observe(contactSection);

/* =====================================
   WHATSAPP PULSE
===================================== */

const whatsapp =
document.querySelector(".whatsapp");

setInterval(() => {

    whatsapp.classList.add("pulse");

    setTimeout(() => {

        whatsapp.classList.remove("pulse");

    },1000);

},5000);