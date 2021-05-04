let front = {
  hamburger: $('.hamburger'),
  header: $('.header'),
  navbar: $('.mobile-menu'),
  body: $('body'),
  init: function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 40) {
        $('header').addClass("scroll-header");
      } else {
        $('header').removeClass("scroll-header");
      }
    });
      this.events();   
      
      $(document).on('click', '.toggle-sub-menu', function(e) {
        e.preventDefault();
        if ($(this).parent().hasClass("show")) {
          $(this).parent().removeClass("show");
      } else {
        $('.menu-item-has-child').removeClass('show');
          $(this).parent().addClass('show');
        }
      });
      
      $('html').click(function(e) {
      var a = e.target;
      if ($(a).parents('.menu-item-has-child').length === 0) {
        $('.menu-item-has-child').removeClass('show'); //hide menu item
      }
      });
  },
  toggleNav: function () {
    if (!this.hamburger.hasClass('open')) {
        this.hamburger.addClass('open');
        this.navbar.addClass('active');
        this.body.addClass('overflow');
        } else {
            this.hamburger.removeClass('open');
            this.navbar.removeClass('active');
            this.body.removeClass('overflow');
        }
    },
  events: function () {
      let self = this;
      $(document).on('click', '.hamburger', function () {
          self.toggleNav();
      });
      $(document).on('click', '.menu-close', function () {
          self.toggleNav();
      });
  }
};


jQuery(function () {
  front.init();
});

const slider = document.querySelector('.hero-screen__slider');
const before = document.querySelector('.hero-screen__slider_before');
const beforeImage = before.querySelector('.hero-screen__slider_before img');
const resizer = document.querySelector('.hero-screen__slider_resizer');

let active = false;

//Sort overflow out for Overlay Image
document.addEventListener("DOMContentLoaded", function() {
  let width = slider.offsetWidth;
  beforeImage.style.width = width + 'px';
});

//Adjust width of image on resize 
window.addEventListener('resize', function() {
  let width = slider.offsetWidth;
  beforeImage.style.width = width + 'px';
})

resizer.addEventListener('mousedown',function(){
  active = true;
 resizer.classList.add('resize');

});

document.body.addEventListener('mouseup',function(){
  active = false;
 resizer.classList.remove('resize');
});

document.body.addEventListener('mouseleave', function() {
  active = false;
  resizer.classList.remove('resize');
});

document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  let x = e.pageX;
  x -= slider.getBoundingClientRect().left;
  slideIt(x);
  pauseEvent(e);
});

resizer.addEventListener('touchstart',function(){
  active = true;
  resizer.classList.add('resize');
});

document.body.addEventListener('touchend',function(){
  active = false;
  resizer.classList.remove('resize');
});

document.body.addEventListener('touchcancel',function(){
  active = false;
  resizer.classList.remove('resize');
});

//calculation for dragging on touch devices
document.body.addEventListener('touchmove',function(e){
  if (!active) return;
  let x;
  
  let i;
  for (i=0; i < e.changedTouches.length; i++) {
  x = e.changedTouches[i].pageX; 
  }
  
  x -= slider.getBoundingClientRect().left;
  slideIt(x);
  pauseEvent(e);
});

function slideIt(x){
    let transform = Math.max(0,(Math.min(x,slider.offsetWidth)));
    before.style.width = transform+"px";
    resizer.style.left = transform-0+"px";
}

//stop divs being selected.
function pauseEvent(e){
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    e.cancelBubble=true;
    e.returnValue=false;
    return false;
}

