// ================================
// Portfolio Website JavaScript
// ================================

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("#menu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}

// Close menu after clicking link
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

// Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// Scroll To Top
const topBtn = document.querySelector(".top");

window.addEventListener("scroll", () => {
    if (!topBtn) return;

    if (window.scrollY > 400) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
});

// Typing Animation


function createTypingEffect(elementId, words, typingSpeed = 120, deletingSpeed = 60, pause = 1500) {

    const element = document.getElementById(elementId);

    if (!element) return;

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            element.textContent = currentWord.substring(0, charIndex++);
        }
        else {

            element.textContent = currentWord.substring(0, charIndex--);
        }

        let speed = deleting ? deletingSpeed : typingSpeed;

        if (!deleting && charIndex === currentWord.length + 1) {

            deleting = true;
            speed = pause;

        }

        if (deleting && charIndex === 0) {

            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;

        }

        setTimeout(type, speed);

    }

    type();

}

createTypingEffect("typing", [

    "ADVOCATE", 
    "HIGH COURT",
    "Legal Advisor",
    "Property",
    "& Civil Matters",
    "Corporate",
    " & Contract Law",
    "Expert in",
     "Legal Consultation"

]);

createTypingEffect("typing-about", [

    "Ashish Mishra",
    "High Court Advocate",
    "Civil & Criminal Lawyer",
    "Legal Consultant",
    "Professional",
     "Legal Services"

]);







// Active Navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (pageYOffset >= top && pageYOffset < top + height) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {
            link.classList.add("active");
        }

    });

});

// Counter Animation
const counters = document.querySelectorAll(".counter-box h2");

function startCounter() {

    counters.forEach(counter => {

        const target = parseInt(counter.innerText);

        let count = 0;

        const update = () => {

            count += Math.ceil(target / 80);

            if (count < target) {

                counter.innerText = count + "+";

                requestAnimationFrame(update);

            } else {

                if (counter.innerText.includes("%")) {
                    counter.innerText = target + "%";
                } else {
                    counter.innerText = target + "+";
                }

            }

        };

        update();

    });

}

let counterStarted = false;

window.addEventListener("scroll", () => {

    const counterSection = document.querySelector(".counter");

    if (!counterSection) return;

    if (!counterStarted &&
        window.scrollY > counterSection.offsetTop - 500) {

        counterStarted = true;
        startCounter();

    }

});

// Reveal Animation
const revealElements = document.querySelectorAll("section");

function reveal() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 120) {
            element.classList.add("show-element");
        }

    });

}

window.addEventListener("scroll", reveal);
reveal();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// Scroll Progress Bar
const progress = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    if (!progress) return;

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressHeight =
        (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressHeight + "%";

});



// Current Year
const year = document.getElementById("year");

if (year) {
    year.innerHTML = new Date().getFullYear();
}

console.log("Portfolio Loaded Successfully 🚀");





