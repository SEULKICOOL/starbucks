const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')
searchEl.addEventListener('click', function () {
  searchInputEl.focus()
})
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})



const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    gsap.to('#to-top', .2,{
      x: 0
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    gsap.to('#to-top', .2,{
      x: 100
    });
  }
})); 



toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});



const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});




new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', 
  autoplay: true, 
  loop: true 
});


new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,  
  spaceBetween: 10, 
  centeredSlides: true,
  loop: true, 
   autoplay: {
  delay: 1000
  },
  pagination: {
   el: '.promotion .swiper-pagination',
   clickable: true 
   },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }

  });

new Swiper('.awards .swiper-container',{
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
       prevEl:'.awards .swiper-prev',
       nextEl:'.awards .swiper-next'
    }
});


  const promotionEl = document.querySelector('.promotion');
  const promotionToggleBtn = document.querySelector('.toggle-promotion');

  let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});

 function floatingObject(selector) {
  gsap.to(selector, 1.2,
      {
      y: 50,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: 1
    }
   )
}
 floatingObject('.floating1')
 floatingObject('.floating2')
 floatingObject('.floating3')



const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8
   })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();