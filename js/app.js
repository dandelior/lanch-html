(function(){

    const triggerMenu = document.getElementById('triggerMenu');
    const hamburger = document.querySelector('#triggerMenu .hamburger');
    const menu = document.getElementById('menu');
    const body = document.querySelector('body');
    
    triggerMenu.onclick = () => {
        menu.classList.toggle('show');
        hamburger.classList.toggle('is-active');
        body.classList.toggle('hidden-x');
    }

    // Show/Hide scroll Header
    var iScrollPos = 0;

  	$(window).scroll(function () {
        var iCurScrollPos = $(this).scrollTop();
        if ($(window).scrollTop() > 400) {
          $('header').addClass('on-scroll');
          if (iCurScrollPos > iScrollPos) {
              $('header').addClass('down');
              $('header').removeClass('up');
          } else {
            $('header').removeClass('down');
            $('header').addClass('up');
          }
        } else {
          $('header').removeClass('on-scroll');
          $('header').removeClass('up');
          $('header').removeClass('down');
        }
  	    iScrollPos = iCurScrollPos;
    });
    
    const linkMenu = document.querySelectorAll('.menu .links a');
    // const linkComoFunciona = document.getElementsByClassName('goToComoFunciona');

    $('.goToInicio').click(function() {
      $('html, body').animate({
        scrollTop: $('#inicio').offset().top
      });
    });
    $('.goToComoFunciona').click(function() {
      $('html, body').animate({
        scrollTop: $('#steps').offset().top-140
      });
    });
    $('.goToPlanes').click(function() {
      $('html, body').animate({
        scrollTop: $('#planes').offset().top-40
      });
    });
    $('.goToContrata').click(function() {
      $('html, body').animate({
        scrollTop: $('#contrata').offset().top-60
      });
    });
    // onClickLinkMenu = (e) => {
    //   e.scrollTo();
    // }

    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth < 760) {
      for(var i = 0; linkMenu.length; i++) {
        linkMenu[i].addEventListener("click", function(){
          // console.log("click!");
          menu.classList.toggle('show');
          hamburger.classList.toggle('is-active');
          body.classList.toggle('hidden-x');
          // onClickLinkMenu(linkMenu[i]);
        }, false)
      }
      // console.log('Pantalla movil');
    } 
    // else {
    //   for(var i = 0; linkMenu.length; i++) {
    //     // onClickLinkMenu(linkMenu[i]);
    //   }
    // }
  
})();