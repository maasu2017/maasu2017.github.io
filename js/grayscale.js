/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

//Page Preloader
$(window).load(function(){
    $('#page-loader').fadeOut(500);
});

$(document).ready(collapseNavbar);

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

$('.intro').backstretch([
      "img/intro-bg.jpg",
      "img/intro-bg2.jpg",
      "img/intro-bg3.jpg"
  ], {duration: 5000, fade: 1000});

$('body').append('<img class="preload-image" src="img/contact-bg.jpg" style="display:none;"/>');

$('#sponsors').waypoint(function(direction){

    if($('.preload-image').length){$('.preload-image').remove();}

    $('.backstretch').remove();

    if (direction=='down'){
        $.backstretch('img/contact-bg.jpg');
    }else{
        // $.backstretch('assets/header-bg.jpg');
        $('.intro').backstretch([
              "img/intro-bg.jpg",
              "img/intro-bg2.jpg",
              "img/intro-bg3.jpg"
          ], {duration: 5000, fade: 1000});
    }
});

function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();
    var elemMid = (elemTop + elemBottom)/2
    return ((elemMid < viewportBottom) && (elemMid > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation($elem) {

    // If the animation has already been started
    if ($elem.hasClass('start')) {
        if (!isElementInViewport($elem))
            $elem.removeClass('start');
        else
            return;
    }
    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.focus();
    } else {
        $elem.blur()
    }
}

$(document).ready(function(){
  $("#c1").on("hide.bs.collapse", function(){
    $("#b1").html('<span class="fa fa-chevron-right"></span> Co-Chairs');
  });
  $("#c1").on("show.bs.collapse", function(){
    $("#b1").html('<span class="fa fa-chevron-down"></span> Co-Chairs');
  });
  $("#typed").typed({
      stringsElement: $('#typed-strings'),
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      cursorChar: "|",
      loop: true
  });
});
$(document).ready(function(){
  $("#c2").on("hide.bs.collapse", function(){
    $("#b2").html('<span class="fa fa-chevron-right"></span> Logistics');
  });
  $("#c2").on("show.bs.collapse", function(){
    $("#b2").html('<span class="fa fa-chevron-down"></span> Logistics');
  });
});
$(document).ready(function(){
  $("#c3").on("hide.bs.collapse", function(){
    $("#b3").html('<span class="fa fa-chevron-right"></span> Finance');
  });
  $("#c3").on("show.bs.collapse", function(){
    $("#b3").html('<span class="fa fa-chevron-down"></span> Finanace');
  });
});
$(document).ready(function(){
  $("#c4").on("hide.bs.collapse", function(){
    $("#b4").html('<span class="fa fa-chevron-right"></span> Workshops');
  });
  $("#c4").on("show.bs.collapse", function(){
    $("#b4").html('<span class="fa fa-chevron-down"></span> Workshops');
  });
});
$(document).ready(function(){
  $("#c5").on("hide.bs.collapse", function(){
    $("#b5").html('<span class="fa fa-chevron-right"></span> Publicity');
  });
  $("#c5").on("show.bs.collapse", function(){
    $("#b5").html('<span class="fa fa-chevron-down"></span> Publicity');
  });
});
$(document).ready(function(){
  $("#c6").on("hide.bs.collapse", function(){
    $("#b6").html('<span class="fa fa-chevron-right"></span> Multimedia');
  });
  $("#c6").on("show.bs.collapse", function(){
    $("#b6").html('<span class="fa fa-chevron-down"></span> Multimedia');
  });
});
$(document).ready(function(){
  $("#c7").on("hide.bs.collapse", function(){
    $("#b7").html('<span class="fa fa-chevron-right"></span> Community Liaison');
  });
  $("#c7").on("show.bs.collapse", function(){
    $("#b7").html('<span class="fa fa-chevron-down"></span> Community Liaison');
  });
});
$(document).ready(function(){
  $("#c8").on("hide.bs.collapse", function(){
    $("#b8").html('<span class="fa fa-chevron-right"></span> Entertainment');
  });
  $("#c8").on("show.bs.collapse", function(){
    $("#b8").html('<span class="fa fa-chevron-down"></span> Entertainment');
  });
});
$(document).ready(function(){
  $("#c9").on("hide.bs.collapse", function(){
    $("#b9").html('<span class="fa fa-chevron-right"></span> Registration');
  });
  $("#c9").on("show.bs.collapse", function(){
    $("#b9").html('<span class="fa fa-chevron-down"></span> Registration');
  });
});
$(document).ready(function(){
  $("#c10").on("hide.bs.collapse", function(){
    $("#b10").html('<span class="fa fa-chevron-right"></span> Volunteer Coordinator');
  });
  $("#c10").on("show.bs.collapse", function(){
    $("#b10").html('<span class="fa fa-chevron-down"></span> Volunteer Coordinator');
  });
});
$(document).ready(function(){
  $("#c10").on("hide.bs.collapse", function(){
    $("#b10").html('<span class="fa fa-chevron-right"></span> Volunteer Coordinator');
  });
  $("#c10").on("show.bs.collapse", function(){
    $("#b10").html('<span class="fa fa-chevron-down"></span> Volunteer Coordinator');
  });
});
// I took out the lorem dim sum from this file, it now lives in schedule.js -tiners

$('.scrollimation').waypoint(function(){
        $(this).toggleClass('in');
    },{offset:'90%'});

// Capture scroll events
$(window).scroll(function(){
    checkAnimation($('.about'));
    checkAnimation($('.schedule'));
});
