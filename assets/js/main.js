(function ($) {
    function CustomCursor() {
        var cursor = $(".cursor"),
            follower = $(".cursor-follower");

        var posX = 0,
            posY = 0;

        var mouseX = 0,
            mouseY = 0;

        TweenMax.to({}, 0.016, {
            repeat: -1,
            onRepeat: function () {
                posX += (mouseX - posX) / 10;
                posY += (mouseY - posY) / 10;

                TweenMax.set(follower, {
                    css: {
                        left: posX - 12,
                        top: posY - 12
                    }
                });

                TweenMax.set(cursor, {
                    css: {
                        left: mouseX,
                        top: mouseY
                    }
                });
            }
        });

        $(document).on("mousemove", function (e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
        });

        $(".link").on("mouseenter", function () {
            cursor.addClass("active");
            follower.addClass("active");
        });
        $(".link").on("mouseleave", function () {
            cursor.removeClass("active");
            follower.removeClass("active");
        });

        $(".empty-cursor").on("mouseenter", function () {
            follower.addClass("empty");
            cursor.addClass("empty");
        });
        $(".empty-cursor").on("mouseleave", function () {
            follower.removeClass("empty");
            cursor.removeClass("empty");
        });

    }
    class MagneticCursor {
        constructor() {
            this.links = [...document.querySelectorAll('.c-magnetic')];
            this.pos = {
                x: 0,
                y: 0
            };
        }

        activateMagnetic() {
            this.links.map(link => {
                const that = this;
                link.addEventListener('mousemove', function (e) {

                    that.moveTarget(e, this, this.querySelector('.span'), 20);
                });

                link.addEventListener('mouseout', function () {

                    TweenMax.to(this.querySelector('.span'), 0.3, {
                        x: 0,
                        y: 0
                    });
                });
            });
        }


        moveTarget(e, link, span, force) {
            var boundingRect = link.getBoundingClientRect();
            var relX = e.pageX - boundingRect.left;
            var relY = '100px';

            TweenMax.to(span, 0.3, {
                x: (relX - boundingRect.width / 2) / boundingRect.width * force,
                y: (relY - boundingRect.height / 2) / boundingRect.height * force,
                ease: Power2.easeOut
            });
        }

        render() {
            this.activateMagnetic();
        }
    }

    const magneticCursor = new MagneticCursor();

    magneticCursor.render();

    //--------------------------------------------------
    // Animation on full menu
    //--------------------------------------------------
    TweenMax.to('.menu', 1, {
        opacity: 0,
    })

    var t1 = new TimelineMax({
        paused: true
    });
    t1.to('.background_block_first', 0.5, {
        height: '50%'
    });
    t1.to('.background_block_second', 0.5, {
        height: '50%',
        delay: '-0.5'
    });
    t1.to(".one", 0.3, {
        y: 9,
        autoAlpha: 0,
        delay: '-1',
        ease: Expo.easeInOut
    });
    t1.to(".two", 0.3, {
        ease: Expo.easeInOut,
        delay: '-1'
    });
    t1.to(".tre", 0.3, {
        y: -9,
        autoAlpha: 0,
        ease: Expo.easeInOut,
        delay: '-1'
    });

    t1.to(".menu", 1, {
        autoAlpha: 1,
        ease: Expo.easeOut,
        delay: '-0.3'
    })

    t1.from(".menu ul li", 0.3, {
        scale: '1.4',
        opacity: 0,
        ease: Power4.easeInOut,
        delay: '0.8'
    }, '-0.01');

    t1.reverse();
    $(document).on("click", ".toggle-btn", function () {
        t1.reversed(!t1.reversed()); //toggles the orientation

    });
    $(document).on("click", ".menu-link", function () {
        t1.reversed(!t1.reversed()); //sets the orientation to reversed
    });


    //   Multi-menu
    $(".multi-start").on("mouseenter", function () {
        $(this).addClass("hide");
        $('.multimenu').addClass("active");
    });

    $(".multimenu").on("mouseleave", function () {
        $('.multimenu').removeClass("active");
        $('.menu-link').removeClass('hide');
    });


    $(".multi-leave").on("mouseenter", function () {
        $('.multimenu').removeClass("active");
        $('.menu-link').removeClass('hide');
    });


    //--------------------------------------------------
    // AOS.js begin
    //--------------------------------------------------
    AOS.init({
        once: true,
    });

})(jQuery);