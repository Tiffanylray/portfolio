$(document).ready(() => {
  let $windowWidth,
      $windowHeight,
      $pos,
      tickingResize = false,
      tickingScroll = false,
      $navUl = $('.nav-ul'),
      $burger = ('.burger');

  // Button Scroll Function
  $('a.scrollLink').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate(
      {scrollTop: $($(this).attr('href')).offset().top }, 500);
  });


  //Mobile Nav bar 
  $('#mobile-menu').on('click', () => {
    let $navUl = $('.nav-ul');
    let $mobileMenu = $('#mobile-menu');
    $('.nav-ul').addClass().slideToggle('slow');
    $('.burger').toggleClass('nav-open');
  });

//All Nav Scroll Events
  const onScroll = () => {
    $pos = $(window).scrollTop();
    let $header = $('header'),
        $navTitle = $header.find('.header-title'),
        $canvasClientSize = $('#canvas').height();

    //animating nav title & adding position fixed for navbar 
    if ($pos >= $canvasClientSize) {
      $header.addClass('display');
      $navTitle.addClass('header-show');
    } else if ($pos < $canvasClientSize) {
      $header.removeClass('display');
      $navTitle.removeClass('header-show');
    }


    tickingScroll = false;
  };

  const requestScroll = () => {
    if (!tickingScroll) {
      requestAnimationFrame(onScroll);
    }
    tickingScroll = true;
  };

  $(window).on('scroll', requestScroll);



  const onResize = () => {
    $windowWidth = $(window).innderWidth();
    $windowHeight = $(window).innderHeight();

    requestScroll();

    if( $(window).width() > 900) {
      $('.nav-ul').removeAttr("style");
    }

    tickingResize = false;
  }

  const requestResize = () => {
    if (!tickingResize) {
      requestAnimationFrame(onResize);
    }
    tickingResize = true;
  }

  $(window).on('resize', requestResize);


  //End of document ready function
});
