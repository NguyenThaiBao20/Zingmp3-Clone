

// sidebar
const btnsidebar = document.querySelector('.menu-links');
const sidebar = document.querySelector('.sidebar')
const body = document.getElementsByTagName('body')
const headersidebar = document.getElementById('header');
const main = document.querySelector('.main-container');
const btnMenuMobile = document.getElementById('btn-menu-moblie');
const btncloseMenu = document.getElementById('btn-close-menu');


// btn menu mobile

btnMenuMobile.addEventListener('click', function() {
    sidebar.classList.toggle('active-mobile')
})

btncloseMenu.addEventListener('click', function() {
    sidebar.classList.remove('active-mobile');
})


// 
btnsidebar.addEventListener('click', function() {
    sidebar.classList.toggle('active')
})

const widthWindow = window.innerWidth;

const widthScreen = screen.width;


// function sbSetWidth() {
//     if(widthWindow <= 1019) {
//         sidebar.classList.add('active');
//     }
//     else{
//         sidebar.classList.remove('active');
//     }
// }

// model lib
const btnModelLib = document.querySelector('.btn-active-model-lib');
const modelMenuLib = document.getElementById('model-menu-lib');
const btnCloseModelLib = document.querySelector('.btn-model-lib_close');


btnModelLib.addEventListener('click', function(){
    modelMenuLib.classList.add('active');
})

btnCloseModelLib.addEventListener('click', function() {
    modelMenuLib.classList.remove('active');
})





