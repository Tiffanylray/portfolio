$(document).ready(() => {
  let deviceWidth = $(window).width();
  let deviceHeight = $(window).height();

  //Sticky Scroll Nav Bar
  $(window).on('scroll', function() {
    let pos = $(window).scrollTop();
    let navBar = $('#nav-bar');
    let nav = $('nav');
    let navPos = navBar.position().top;
    let lastPos = 0;

    if (pos >= deviceHeight) {
      navBar.addClass('display');
      nav.addClass('fixed');
    }
    if (pos < deviceHeight){
      nav.removeClass('fixed');
      navBar.removeClass('display');
    };
  });









  //End of document ready function
});
