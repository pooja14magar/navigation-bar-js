let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

searchBox.addEventListener('click',()=>{
    navbar.classList.toggle("showInput");
     if(navbar.classList.contains("showInput")){
         searchBox.classList.replace("bx-search","bx-x")
    }else{
        searchBox.classList.replace("bx-x","bx-search")
    }
})




// siderbar open close js code

let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let closeOpenBtn = document.querySelector(".nav-link .bx-x");
let navLinks = document.querySelector(".nav-link");

menuOpenBtn.addEventListener('click', () => {
    navLinks.style.left = "0";
});

closeOpenBtn.addEventListener('click', () => {
    navLinks.style.left = "-100%";
});