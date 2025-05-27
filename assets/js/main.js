/*=============== Active Link =============== */
const navLink = document.querySelectorAll('.nav__link');

function activeLink(){
    navLink.forEach((a) => a.classList.remove('active-link'));
    this.classList.add('active-link');
}

navLink.forEach((a) => a.addEventListener('click',activeLink));

/*=============== BackGround Header =============== */

/*=============== Mixitup Filter =============== */
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item',
    },
    animation:{
        duration: 300,
    },
});
/*=============== Active Work =============== */
const linkWork = document.querySelectorAll('.category__btn');

function activeWork(){
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click',activeWork));
