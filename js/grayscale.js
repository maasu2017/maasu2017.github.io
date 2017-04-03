/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// MOBILE DETECTION //
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) 
{
  window.location = "./mobile"
}



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

$('#board').waypoint(function(direction){

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

$(document).on('scroll', function() {
  var scrollBottom = $(window).scrollTop() + $(window).height();
  var scrollMid = $(window).scrollTop() + $(window).height()/2;
  var scrollTop = $(this).scrollTop();
  var panelTop = $('#workshop').position().top - 5;
  var panelBottom = $('#workshop').offset().top + $('#workshop').outerHeight(true);
  var tableBottom = $('#workshop-table').offset().top + $('#workshop-table').outerHeight(true);
  var infoBottom = $('#workshop-p').offset().top + $('#workshop-p').outerHeight(true);
  var arrowBottom = $('#workshop-arrow').offset().top + $('#workshop-arrow').outerHeight(true);

  if(scrollTop >= panelTop && scrollMid < arrowBottom && !$('#workshop-p').hasClass('wfix')){
    $('#workshop-p').addClass('wfix').fadeIn(200);
  }

  else if(scrollMid >= arrowBottom && $('#workshop-p').hasClass('wfix')) {
    $('#workshop-p').fadeOut(200, function() {
      $('#workshop-p').removeClass('wfix');
    });
  }
  else if(scrollTop < panelTop && $('#workshop-p').hasClass('wfix')) {
    $('#workshop-p').removeClass('wfix');
  }
});

$(document).ready(function(){
  $('#workshop-table').on('click', 'tbody tr', function(event) {
    $(this).addClass('highlight').siblings().removeClass('highlight');
  });
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
      backDelay: 1500,
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
    $("#b3").html('<span class="fa fa-chevron-down"></span> Finance');
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
    $("#b10").html('<span class="fa fa-chevron-right"></span> Leadership Development Coordinator');
  });
  $("#c10").on("show.bs.collapse", function(){
    $("#b10").html('<span class="fa fa-chevron-down"></span> Leadership Development Coordinator');
  });
});
$(document).ready(function(){
  $("#c11").on("hide.bs.collapse", function(){
    $("#b11").html('<span class="fa fa-chevron-right"></span> Freshmen Representative');
  });
  $("#c11").on("show.bs.collapse", function(){
    $("#b11").html('<span class="fa fa-chevron-down"></span> Freshmen Representative');
  });
});
$(document).ready(function(){
  $("#c12").on("hide.bs.collapse", function(){
    $("#b12").html('<span class="fa fa-chevron-right"></span> MAASU Advisor');
  });
  $("#c12").on("show.bs.collapse", function(){
    $("#b12").html('<span class="fa fa-chevron-down"></span> MAASU Advisor');
  });
});
// I took out the lorem dim sum from this file, it now lives in schedule.js -tiners

$('.scrollimation').waypoint(function(){
    if ($(this).hasClass('done')) {
      return;
    }
    else {
      $(this).toggleClass('in');
      $(this).addClass('done');
    }
  },{offset:'90%'});

// Capture scroll events
$(window).scroll(function(){
    checkAnimation($('.about'));
    checkAnimation($('.schedule'));
});
