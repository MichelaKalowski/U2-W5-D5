const navb = document.querySelector(".nav");
const button= document.querySelector("button")
window.onscroll = () => {
    if (window.scrollY > 300) {
        navb.classList.add("nav-scroll");
        button.classList.add("button-scroll");
    } else {
        navb.classList.remove("nav-scroll");
        button.classList.remove("button-scroll");
    }
}; 

 