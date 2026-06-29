// ===============================
// AMRITA FLOUR MILL
// Premium Website Script
// ===============================

// Sticky Header
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 80) {
        header.style.background = "#082812";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.2)";
    } else {
        header.style.background = "rgba(8,40,18,.95)";
        header.style.boxShadow = "none";
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});

// Active Menu
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop;

if(pageYOffset>=sectionTop-120){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

// Gallery Hover Effect
const gallery=document.querySelectorAll(".gallery img");

gallery.forEach(img=>{

img.addEventListener("mouseover",()=>{

img.style.transform="scale(1.05)";

});

img.addEventListener("mouseout",()=>{

img.style.transform="scale(1)";

});

});

// Fade Animation
const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".card,.about,.products,.gallery,.contact").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(50px)";

el.style.transition="1s";

observer.observe(el);

});

// Footer Year
const year=new Date().getFullYear();

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML="© "+year+" Amrita Flour Mill | All Rights Reserved.";

}

console.log("Amrita Flour Mill Website Loaded Successfully");
const menu=document.querySelector(".menu-toggle");

const navbar=document.querySelector(".navbar");

menu.onclick=()=>{

navbar.classList.toggle("active");

}