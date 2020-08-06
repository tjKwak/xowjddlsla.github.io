window,addEventListener('scroll', scrollWork);

const htmlElem = document.querySelector('html');
const headerElem = document.querySelector('header')
const btnBox = document.querySelector('.lang_box > a');
console.log(btnBox);

// hearder scroll
var scroll = 0;
function scrollWork() {
    if (htmlElem.scrollTop <= 80 ){
        headerElem.classList.remove('on')
    } else if (htmlElem.scrollTop > 81 && htmlElem.scrollTop < 300){
        headerElem.classList.add('on')
    }

    if (!headerElem.classList.contains('on')) return; 
    if (scroll < htmlElem.scrollTop && htmlElem.scrollTop > 80) {
        headerElem.classList.add('hide')
    } else {
        headerElem.classList.remove('hide')
    }
    scroll = htmlElem.scrollTop;
}

//header siteMap

const headerUtil = document.querySelector('.header_util')
const sitemapBnt = document.querySelector('.sitemap_box > button')
const headerLogo = document.querySelector('.header_logo')


sitemapBnt.addEventListener('click', btnWork)

function btnWork() {
    if (headerUtil.classList.contains('ck')) {
        headerUtil.classList.remove('ck');
        headerLogo.classList.remove('ck');
        window.addEventListener('scroll', scrollWork);

    } else {
        headerUtil.classList.add('ck');
        headerLogo.classList.add('ck');
        window.removeEventListener('scroll', scrollWork);
    } 
    
   

}

// silde
$(document).ready(function () {
    $('.slide').bxSlider({
        auto: true,
        speed: 1000
    });
});

//언어 메뉴

btnBox.addEventListener('click', clickWork);

function clickWork(ev) {
    ev.preventDefault();
    if (ev.target.tagName !== 'A') return;
    const targetDiv = ev.target.parentNode;
    if (targetDiv.classList.contains('on')) {
        targetDiv.classList.remove('on');
    } else {
        targetDiv.classList.add('on');
    }
}