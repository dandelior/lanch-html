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

    var doc = document.documentElement;
    var w = window;
  
    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;
  
    var header = document.querySelector('header');
  
    var checkScroll = function() {
  
      curScroll = w.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) { 
        //scrolled up
        direction = 2;
      }
      else if (curScroll < prevScroll) { 
        //scrolled down
        direction = 1;
      }
  
      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }
      
      prevScroll = curScroll;
    };
  
    var toggleHeader = function(direction, curScroll) {
      if (direction === 2 && curScroll > 300) { 
  
        header.classList.add('fixed');
        prevDirection = direction;
      }
      else if (direction === 1) {
        header.classList.remove('fixed');
        prevDirection = direction;
      }
    };
    
    window.addEventListener('scroll', checkScroll);
  
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
