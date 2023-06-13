const switchToggle = document.querySelector('input[type="checkbox"]');
const toggleIcn = document.getElementById('toggle-icon');
const nav = document.getElementById('nav');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

function switchMode(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
        imgSwitchMode('dark');
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
        imgSwitchMode('light');
    }
}
function darkMode(){
    toggleIcn.children[0].textContent = "Dark Mode";
    toggleIcn.children[1].classList.replace('fa-sun', 'fa-moon');
    nav.style.background = 'rgb(0 0 0 / 50%)';
}
function lightMode(){
    toggleIcn.children[0].textContent = "Light Mode";
    toggleIcn.children[1].classList.replace('fa-moon', 'fa-sun');
    nav.style.background = 'rgb(255 255 255 / 50%)';
}
function imgSwitchMode(mode){
    img1.src = `img/undraw_Projections_${mode}.svg`;
    img2.src = `img/undraw_Freelancer_${mode}.svg`;
    img3.src = `img/undraw_Raining_${mode}.svg`;
}
switchToggle.addEventListener('change', switchMode);