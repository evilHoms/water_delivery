'use strict';

const header = document.querySelector('.main-header');
const firstSection = document.querySelector('section');
const hiddenBg = document.querySelector('.hidden-fixed-bg');

firstSection.style.marginTop = header.getBoundingClientRect().height + 'px';

document.addEventListener('scroll', onDocumentScroll);

function onDocumentScroll(e) {
  if ((window.scrollY || window.pageYOffset) > window.innerHeight) {
    hiddenBg.classList.remove('hidden');
  }
  else {
    hiddenBg.classList.add('hidden');
  }
}

const anim = new SmoothAppearing(); 
anim.runAnimationOnScroll();