$(document).ready(() => {
  let $windowWidth,
      $windowHeight,
      $pos,
      tickingResize = false,
      tickingScroll = false,
      $navUl = $('.nav-ul'),
      $navLis = $navUl.find('.nav-li'),
      $scrollLinks = $('.scroll'),
      $canvasLink = $('.scrollLink'),
      duration = 1000,
      $burger = $('.burger');

  // Smooth Scroll
  $scrollLinks.on('click', function () {
    let target = $(this.hash);
    $('html, body').animate({
        scrollTop: target.offset().top
    }, duration);
  });
  //Seperates canvas link so that .active class color wasn't assigned on canvas element
  $canvasLink.on('click', function(){
    let target = $(this.hash);
    $('html, body').animate({
      scrollTop: target.offset().top
    }, duration);
  });


  //Mobile Nav bar 
  $('#mobile-menu').on('click', () => {
    $burger.toggleClass('nav-open');
    $navUl.toggleClass('nav-open');
    $navLis.toggleClass('nav-open');
  });

//All Nav Scroll Events
  const onScroll = () => {
    $pos = $(window).scrollTop();
    let $header = $('header'),
        $navTitle = $header.find('.header-title'),
        $canvasClientSize = $('#canvas').height();

    //animating nav title & adding position fixed for navbar 
    if ($pos >= $canvasClientSize) {
      //header add fixed class
      $header.addClass('display');
      //title opacity 1
      $navTitle.addClass('header-show');
      //adding opacity 1 to all lis
      for (i = 0; i < $navLis.length; i++) {
        let $navLiEl = $(`.nav-li-${[i + 1]}`);
        $navLiEl.removeClass('nav-li-hide');
      }
    } else if ($pos < $canvasClientSize) {
      //removing fixed class
      $header.removeClass('display');
      //setting opacity to 0
      $navTitle.removeClass('header-show');
      //setting opacity to 0 for all lis
      for (i = 0; i < $navLis.length; i++) {
        let $navLiEl = $(`.nav-li-${[i + 1]}`);
        $navLiEl.addClass('nav-li-hide');
      }
    }


    //Animating nav scroll links
    $scrollLinks.each(function() {
      var sectionOffset = $(this.hash).offset().top - 60;

      if (sectionOffset <= $pos) {
          $(this).addClass('active');
          $(this).parent().siblings().children().removeClass('active');
      }
  })


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
    $windowWidth = $(window).innerWidth();
    $windowHeight = $(window).innerHeight();

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
