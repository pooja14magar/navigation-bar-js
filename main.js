const toggleButton =document.getElementById('toggleButton');
const navLink =document.getElementById('navLink');

toggleButton.addEventListener('click',()=>{
    navLink.classList.toggle('active');

});