var mySwiper = new Swiper('.swiper-container', {
  speed: 800,
  spaceBetween: 1000,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,

  },
});


const header = document.getElementById('mobile_header');
const menu = document.getElementsByClassName('mobile_menu')[0];
const imgMob = document.getElementById('img_mob');
const headerDiv = document.getElementsByClassName('div_for_img')[0];

function toggleStyle(el, styleName, value) {
  if (el.style[styleName] !== value) { //better to check that it is not the value you have
    el.style[styleName] = value;
  } else {
    el.style[styleName] = '';
  }
}
imgMob.addEventListener("click", function () {
  toggleStyle(menu, "display", "block");
  toggleStyle(header, 'backgroundColor', 'rgba(61, 57, 57, 0.5)');
  headerDiv.classList.add('divForImgNone');

});
window.addEventListener('scroll', () => {
  if (menu.style.display !== 'none') {
    toggleStyle(menu, "display", "none");
    toggleStyle(header, 'backgroundColor', 'transparent');
  }
  
});