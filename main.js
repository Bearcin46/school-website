$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })
    });





//show menu
const showMenu=(toggleId,navId)=>{
    const toggle=document.getElementById(toggleId),
    nav=document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        });
    }
}
showMenu('nav_toggle','nav_menu')

//active & remove active

const navLink=document.querySelectorAll('.nav_link')
navLink.forEach(n=> n.classList.remove('active'))
function linkAction(){
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')

    const navMenu=document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n=>n.addEventListener('click', linkAction))


//carousel

