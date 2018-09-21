$(document).ready(function () {

    // slider
    $('.service-details-slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.service-details-slider-min'
      });
      $('.service-details-slider-min').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.service-details-slider-big',
        dots: false,
        arrows:false,
        centerMode: false,
        focusOnSelect: true
      });


    //loader
    $(".loader").fadeOut("slow");

    //fancybox init
    $('[data-fancybox]').fancybox();

    $('.fancybox-media').fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
            media: true
        }
    });
// youtube prew
 if ($("a.youtube-video").length >= 0) {
        $("a.youtube-video").each(function () {
            var $y_link = $(this).attr("href");
            var $get = 2;
            var $def = '';
            var $y_prew = youTube($y_link, $get, $def);
            $(this).find("img.youtube-prew").attr({ src: $y_prew });
        });
    }

    // map
    $('.b-map').each(function (index, el) {
        var adr = $(this).attr('data-address-for-map');

        function init() {
            var myGeocoder = ymaps.geocode(adr);
            myGeocoder.then(
                function (res) {
                    var coord = res.geoObjects.get(0).geometry.getCoordinates();
                    var myMap = new ymaps.Map(el, {
                        center: coord,
                        zoom: 16
                    });
                    myMap.controls.add(
                        new ymaps.control.ZoomControl()
                    );
                    myPlacemark = new ymaps.Placemark(coord, {
                        balloonContentHeader: adr
                    });
                    myMap.geoObjects.add(myPlacemark);
                },
                function (err) {
                    alert('Error');
                }
            );
        }
        ymaps.ready(init);
    });

    // gallery slider
                 $('.gallery-slider-big').slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true,
                  fade: true,
                  asNavFor: '.gallery-slider-small'
                });
                $('.gallery-slider-small').slick({
                  slidesToShow: 12,
                  slidesToScroll: 1,
                  asNavFor: '.gallery-slider-big',
                  dots: false,
                  centerMode: false,
                  focusOnSelect: true,
                     responsive: [
                        {
                          breakpoint: 992,
                          settings: {
                            slidesToShow: 8
                          }
                        },
                        {
                          breakpoint: 767,
                          settings: {
                            slidesToShow: 5
                          }
                        }
                      ]
                });
    
    // details slider
    $('.service-category-block .list li a').click(function(){
                 $('.slider-big').slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  fade: true,
                  asNavFor: '.slider-min'
                });
                $('.slider-min').slick({
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  asNavFor: '.slider-big',
                  dots: false,
                  centerMode: false,
                  focusOnSelect: true
                });
    });
    

    
    
    // mobile-nav icon
    $('.select-model').click(function () {
        $('#nav-icon').toggleClass('open');
        $('.select-model-menu').toggleClass('open');
        $('body').toggleClass('show-select-model-menu2');

    });
    $(document).mouseup(function (e) {
        var div = $(".select-model, .select-model-menu");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            $('#nav-icon').removeClass('open');
            $('.select-model-menu').removeClass('open');
            $('body').removeClass('show-select-model-menu2');
        }
    });

    $('.menu-btn-wrap').click(function () {
        $('.menu-btn-wrap #nav-icon').toggleClass('open');
        $('.mobile-menu').toggleClass('open');
        $('body').toggleClass('show-select-model-menu');
    });
    $(document).mouseup(function (e) {
        var div = $(".menu-btn-wrap, .mobile-menu");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            $('.menu-btn-wrap #nav-icon').removeClass('open');
            $('.mobile-menu').removeClass('open');
            $('body').removeClass('show-select-model-menu');
        }
    });
    // scroll nav fixed
    if ($(window).width() < 767) {
        $(window).scroll(function () {
            var height = $(window).scrollTop();

            if (height > 5) {
                $('.page-index nav').addClass('bg');
            } else {
                $('.page-index nav').removeClass('bg');
            }

        });
    }

    if ($(window).width() > 767) {
        $(window).scroll(function () {
            var height = $(window).scrollTop();
            if (height > 120) {
                $('nav').addClass('fixed');
                $('.mobile-menu').addClass('fixed');
                $('.select-model-menu').addClass('fixed');
            } else {
                $('nav').removeClass('fixed');
                $('.mobile-menu').removeClass('fixed');
                $('.select-model-menu').removeClass('fixed');
            }

        });
    }

    // animations
    if ($(window).width() > 767) {
        $('.bmw-time-icons').viewportChecker({
            repeat: false,
            offset: 100,
            classToAdd: 'visible',
        });
    }
    $('.blog-block').viewportChecker({
        repeat: true,
        offset: 100,
        classToAdd: 'visible',
    });
    $('.page-top-image').viewportChecker({
        repeat: true,
        offset: 100,
        classToAdd: 'visible',
    });

    $('.blog-prews').viewportChecker({
        repeat: true,
        offset: 100,
        classToAdd: 'visible',
    });
    $('.check').viewportChecker({
        repeat: false,
        offset: 100,
        classToAdd: 'visible',
    });


    $('.index-slider .slider').slick({
        fade: true,
        autoplay: true,
        arrows: false,
        pauseOnHover: false
    });

    // phone mask


        $('.phone').inputmask("mask", {
            "mask": "+7 (999) 999-99-99",
            'placeholder': '+7 (___) ___-__-__'
        });


//    if ($('#sticky').length > 0) {
        // blog липкий блок
//        var obj = $('#sticky');
//        var offset = obj.offset();
//        var topOffset = offset.top - 90;
//        var marginTop = obj.css("marginTop");
//
//        $(window).scroll(function () {
//            var scrollTop = $(window).scrollTop();
//
//            if ($(window).width() > 992) {
//                if (scrollTop >= topOffset) {
//
//                    obj.css({
//                        marginTop: 90,
//                        position: 'fixed'
//                    });
//                }
//
//                if (scrollTop < topOffset) {
//
//                    obj.css({
//                        marginTop: 0,
//                        position: 'relative'
//                    });
//                }
//            }
//
//        });
//    }


});
