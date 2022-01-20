$(document).ready(function () {

    /*-------------------------------------------------------------------------------
        meanmenu 
    -------------------------------------------------------------------------------*/
    $(function () {
        var navMain = $("#nav-main");
        navMain.on("click", "a", null, function () {
            navMain.collapse('hide');
        });
    });

    $('#mobile-menu').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu'
    });

    /*-------------------------------------------------------------------------------
        tooltip 
    -------------------------------------------------------------------------------*/
    $('[data-toggle="tooltip"]').tooltip();


    /*------------------------------------------------------------------------------- 
        sticky menu
    -------------------------------------------------------------------------------*/

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 50) {
            $("#sticky-header").removeClass("sticky");
        } else {
            $("#sticky-header").addClass("sticky");
        }
    });


    var nav_offset_top = $('header').height() + 10;
    /*-------------------------------------------------------------------------------
    	 Navbar Fixed 
    -------------------------------------------------------------------------------*/

    function navbarFixed() {
        if ($('.menu-nav').length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $(".menu-nav").addClass("navbar_fixed");
                } else {
                    $(".menu-nav").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();


    /*-------------------------------------------------------------------------------
        owl testimonial slider 
    -------------------------------------------------------------------------------*/

    $('.testi-active .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        dots: false,
        autoplayTimeout: 4500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    
    /*-------------------------------
    text-notify for demo website
    --------------------------------*/
    $(".clse").click(function(){
        $(".text-notify").fadeOut(300);
    })

    
    

    //for portfolio menu active class & mean nav active class
    $('.portfolio-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });


    /*-------------------------------------------------------------------------------
        one page nav jQ start 
    -------------------------------------------------------------------------------*/
    var top_offset = $('.header-hero').height() - 585;
    $('.nav-right nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });

    /*-------------------------------------------------------------------------------
        smooth scroll jQ start 
    -------------------------------------------------------------------------------*/

    $('.mean-nav ul li a').smoothScroll({
        offset: -50
    });

     $('.mean-nav ul li .contact').smoothScroll({
        offset: 100
    });

     $('.nav-right ul li .about').smoothScroll({
        offset: -250
    });
     $('.nav-right ul li .contact').smoothScroll({
        offset: 100
    });
   
    $('.nav-left .logo,.footer-section a').smoothScroll({
        offset: -50
    });

    $('.get-start a, .get-start .arrow').smoothScroll({
        offset: 100
    });

    /*-------------------------------------------------------------------------------
      FAQ JQ 
    -------------------------------------------------------------------------------*/
    $(function () {
        var Accordion = function (el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            var links = this.el.find('.article-title');
            links.on('click', {
                el: this.el,
                multiple: this.multiple
            }, this.dropdown)
        }

        Accordion.prototype.dropdown = function (e) {
            var $el = e.data.el;
            $this = $(this),
                $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass('open');

            if (!e.data.multiple) {
                $el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');
            };
        }
        var accordion = new Accordion($('.accordion-container'), false);
    });

});

/*-------------------------------------------------------------------------------
      find section swiper slider
    -------------------------------------------------------------------------------*/

    var swiper = new Swiper('.find-section .swiper-container', {
          slidesPerView: 'auto',
          spaceBetween: 15,
          freeMode: true,
          // mousewheel: true,
          keyboard: true,
          navigation: {
            nextEl: '.find-section .swiper-button-next',
            prevEl: '.find-section .swiper-button-prev',
          },
           loop: true,
          //  autoplay: {
          //   delay: 4500,
          //   disableOnInteraction: false,
          // },
          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }
        });

        $('.swiper-slide').on('mouseover', function() {
          swiper.autoplay.stop();
        });

        $('.swiper-slide').on('mouseout', function() {
          swiper.autoplay.start();
        });


    /*-------------------------------------------------------------------------------
     portfolio filter menu 
    -------------------------------------------------------------------------------*/
    var swiper = new Swiper('.portfolio-section .swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      freeMode: true,
      
    });
    swiper.on('reachEnd', function(){
    swiper.autoplay = false;
    })

 /*-------------------------------------------------------------------------------
     gsap hero 
    -------------------------------------------------------------------------------*/


        gsap.to(".left", 2,{
             delay: .8,
             width: '50%',
             ease: Power2.easeInOut
        });

        gsap.to(".right", 2,{
             delay: .6,
             width: '50%',
             ease: Power3.easeInOut
        });

        gsap.from('.top-menu-wrapper', 2, {
          delay: .8,
          opacity: 0,
          ease: Expo.easeInOut
        });

        gsap.from('.content .text h1', 2, {
          delay: .6,
          x: 1000,
          ease: Circ.easeInOut
        });
        gsap.from('.content .text p', 2, {
          delay: .7,
          x: 1000,
          ease: Circ.easeInOut
        });

        gsap.to('.content .ridwan', 2, {
          delay: 1.5,
          width: '100%',
          ease: Power2.easeInOut
        });

        gsap.from('.content .dots ul li', 2,{
             delay: 1,
              x: 1000,
              ease: Circ.easeInOut,
              stagger: 0.08
            });

        gsap.from('.content .name', 2, {
          delay: 1.5,
          x: -600,
          ease: Circ.easeInOut
        });

        gsap.from('.get-start', 2, {
          delay: 1.5,
          y: -200,
          ease: Circ.easeInOut,
          opacity: 0
        });

        gsap.from('.pop-msg', 2, {
          delay: 1,
          y: 0,
          ease: Circ.easeInOut,
          opacity: 0
        });


   /*-------------------------------------------------------------------------------
     gsap scroll triger 
    -------------------------------------------------------------------------------*/      

gsap.registerPlugin(ScrollTrigger);

gsap.from('.about-section', {
    duration: 0.6,
    opacity: 0,
    y: 150,
    scrollTrigger: {
            trigger: '.about-section',
            toggleActions: 'restart none none reverse',
        }
});

gsap.from('.about-section .social a', {
    duration: 1,
    opacity: 0,
    x: 150,
    stagger: 0.09,
    ease: Circ.easeInOut,
    scrollTrigger: {
            trigger: '.about-section .social a',
            toggleActions: 'restart none none reverse',
        }
});

gsap.from('.service-section .title', {
    duration: 0.6,
    opacity: 1,
    y: 120,
    scrollTrigger: {
            trigger: '.service-section .title',
            toggleActions: 'restart none none none',
        }
});

gsap.from('.service-box', {
    duration: 0.6,
    opacity: 0,
    y: 180,
    stagger: 0.09,
    scrollTrigger: {
            trigger: '.service-box',
            toggleActions: 'restart none none reverse',
            start: '20% bottom',
        }
});

gsap.from('.t-anim', {
    duration: 0.6,
    opacity: 0,
    y: 60,
    stagger: 0.5,
    scrollTrigger: {
            trigger: '.t-anim',
            toggleActions: 'restart none none none',
        }
});

gsap.from('.find-container', {
    duration: 0.6,
    opacity: 0,
    y: 60,
    scrollTrigger: {
            trigger: '.find-container',
            toggleActions: 'restart none none none',
        }
});

gsap.from('.filter-button-group', {
    duration: 0.6,
    opacity: 0,
    y: 60,
    scrollTrigger: {
            trigger: '.filter-button-group',
            toggleActions: 'restart none none none',
        }
});

gsap.from('.portfolio-single', {
    duration: 0.6,
    opacity: 0,
    y: 90,
    stagger: 0.09,
    scrollTrigger: {
            trigger: '.port-img-wrapper',
            toggleActions: 'restart none none reverse',
            start: '30% 85%',
        }
});

gsap.from('.testimonial-section h2', {
    duration: 0.6,
    opacity: 0,
    y: 60,
    scrollTrigger: {
            trigger: '.testimonial-section h2',
            toggleActions: 'restart none none none',
        }
});
gsap.from('.testi-anim', {
    duration: 0.6,
    opacity: 0,
    y: 60,
    stagger: 0.5,
    scrollTrigger: {
            trigger: '.testi-anim',
            toggleActions: 'restart none none none',
        }
});
gsap.from('.faq-section', {
    duration: 0.6,
    opacity: 0,
    y: 200,
    scrollTrigger: {
            trigger: '.faq-section',
            toggleActions: 'restart none none none',
        }
});
gsap.from('.contact-section h2', {
    duration: 0.6,
    opacity: 0,
    y: 80,
    scrollTrigger: {
            trigger: '.contact-section h2',
            toggleActions: 'restart none none none',
        }
});
gsap.from('.contact-area', {
    duration: 0.6,
    opacity: 0,
    y: 80,
    scrollTrigger: {
            trigger: '.contact-area',
            toggleActions: 'restart none none none',
        }
});

