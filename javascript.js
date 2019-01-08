$(document).ready(() => {
  let deviceWidth = $(window).width();
  let deviceHeight = $(window).height();

  // Button Scroll Function
  $('a.scrollLink').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate(
      {scrollTop: $($(this).attr('href')).offset().top }, 500);
  });


  //Nav Bar
  $(window).on('scroll', function() {
    let pos = $(window).scrollTop();
    let sectionTop = pos + 70;
    let navBar = $('#nav-bar');
    let nav = navBar.find('nav');
    let navUl = nav.find('.nav-ul');
    let navPos = navBar.position().top;


    // Sticky Nar Bar
    if (pos >= deviceHeight) {
      navBar.addClass('display');
      nav.addClass('fixed');
    }
    if (pos < deviceHeight){
      nav.removeClass('fixed');
      navBar.removeClass('display');
    };

    //Highlighing Nav Links

    if (sectionTop > $('#skills').offset().top) {
      highlightLink('skills-a');
    }
    if (sectionTop > $('#projects').offset().top) {
      highlightLink('projects-a');
    }
    if (sectionTop > $('#about').offset().top) {
      highlightLink('about-a');
    };

    function highlightLink(id) {
      $('.nav-ul .active').removeClass('active');
      nav.find('[id="' + id + '"]').addClass('active');
    };

  });






  //End of document ready function
});
