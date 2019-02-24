var pictureSlide = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
     loop:false,
    centeredSlides: false,
    speed: 10,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
   
});

setTimeout(() => {
    pictureSlide.update();
}, 300)

pictureSlide.on('slideChange', function () {
    TweenMax.to('.overlay-background', 0.3, {
        width: '100%',
    })

    TweenMax.to('.background', 0.3, {       
        x: '-50%',
        y: '-50%',
    })
    TweenMax.to('.overlay-1', 0.5, {
       height: '100%',      
    })
    TweenMax.to('.overlay-2', 0.5, {
        height: '100%',
        delay: '0.1'
     })
     TweenMax.to('.overlay-3', 0.5, {
        height: '100%',
        delay: '0.2'
     })
     TweenMax.to('.overlay-4', 0.5, {
        height: '100%',
        delay: '0.3'
     })   
     TweenMax.to('.overlay-5', 0.5, {
        height: '100%',
        delay: '0.4'
     })  

});

pictureSlide.on('slideChangeTransitionEnd', function () {
    TweenMax.to('.overlay-1', 0.5, {
        height: 0,      
     })
     TweenMax.to('.overlay-2', 0.5, {
         height: 0,
         delay: '0.1'
      })
      TweenMax.to('.overlay-3', 0.5, {
         height: '0',
         delay: '0.2'
      })
      TweenMax.to('.overlay-4', 0.5, {
         height: 0,
         delay: '0.3'
      }) 

      TweenMax.to('.overlay-5', 0.5, {
        height: 0,
        delay: '0.4'
     }) 
    TweenMax.to('.overlay-background', 1, {
        width: '0',
        delay: '1',
    })

    TweenMax.to('.background', 0.4, {
        scale: '1',
        x: '-50%',
        y: '-50%',
        skewX: '0',
        skewY: '0',

    })
});


$('.to-up').on('click', function () {
    pictureSlide.slidePrev();
})
$('.to-down').on('click', function () {
    pictureSlide.slideNext();
})