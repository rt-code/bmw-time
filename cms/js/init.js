$(document).ready(function() {
         
        //loader
        $(".loader").fadeOut("slow");

        $('select').selectmenu();

        $('.accordion').accordion({
          heightStyle: "content"
        });
        
        //fancybox init
        $('[data-fancybox]').fancybox();
        
        $('.tooltip').tooltip({
          tooltipClass: "custom-tooltip",
            show:{
              effect:'blind',
              duration:100
            },
            position:{
              at:'right top'
            }      
        });

      // mobile-nav icon
        $('#nav-icon').click(function(){
          $(this).toggleClass('open');
          $('.mobile-menu').fadeToggle();
        });
            $(document).mouseup(function (e){ 
              var div = $(".mobile-menu, #nav-icon");
              if (!div.is(e.target) 
                  && div.has(e.target).length === 0) { 
                $('#nav-icon').removeClass('open');  
                $('.mobile-menu').fadeOut();  
              }
            });

});