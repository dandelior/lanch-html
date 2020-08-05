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

    // AJAX form
    $("#ajaxForm").submit(function(e){
      e.preventDefault();
      var action = $(this).attr("action");
      $.ajax({
        type: "POST",
        url: "https://formsubmit.co/ajax/7ec3f99fe9e1b600c20fb68eb27cac55",
        crossDomain: true,
        data: new FormData(this),
        dataType: "json",
        contentType: "multipart/form-data",
        processData: false,
        contentType: false,
        headers: {
          "Accept": "application/json"
        }
      }).done(function() {
         $('.success').addClass('is-active');
      }).fail(function() {
         alert('Ha ocurrido un error. Por favor contáctanos a hola@somoslanch.cl')
      });
    });
  
  })();

// var iScrollPos = 0;

// window.addEventListener('scroll', function() {
//     var iCurScrollPos = window.scrollY;
//     if (iCurScrollPos > iScrollPos && iCurScrollPos > 120) {
//         document.querySelector('header').classList.add('fixed');
//     } else {
//         document.querySelector('header').classList.remove('fixed');
//     }
//     iCurScrollPos = iCurScrollPos;
// })
