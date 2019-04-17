var menu = document.getElementsByTagName('menu');


function selectQuery(classname) {
  var element = document.querySelector(`.${classname}`);
  return element;
}

var burger = document.querySelector('.burger');

var openIcon = document.querySelector('.open-icon');
var openIconBefore = document.querySelector('.open-icon::before');
var openIconAfter = document.querySelector('.open-icon::after');

var video = document.querySelector('.adsContent__new video');


burger.addEventListener('click', ()=>{
  menu[0].classList.toggle('is-open');
  openIcon.classList.toggle('is-open');
});

video.addEventListener('mouseenter', ()=>{
  video.muted = false;
});
video.addEventListener('mouseleave', ()=>{
  video.muted = true;
});


setTimeout(() => {
  selectQuery('adsContent__new').style.transform = 'translateY(-100%)';
}, 1000);

selectQuery('cross').addEventListener('click', ()=>{
  selectQuery('adsContent__new').style.transform = 'translateY(0)';
})
