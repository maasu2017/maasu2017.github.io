var cookieList = function(cookieName) {
  //When the cookie is saved the items will be a comma seperated string
  //So we will split the cookie by comma to get the original array
  var cookie = Cookies.get(cookieName);

  //Load the items or a new array if null.
  var items = cookie ? cookie.split(/,/) : new Array();

  //Return a object that we can use to access the array.
  //while hiding direct access to the declared items array
  //this is called closures see http://www.jibbering.com/faq/faq_notes/closures.html
  return {
    "add": function(val) {
        //Add to the items.
        items.push(val);
        //Save the items to a cookie.
        //EDIT: Modified from linked answer by Nick see 
        //      http://stackoverflow.com/questions/3387251/how-to-store-array-in-jquery-cookie
        Cookies.set(cookieName, items.join(','));
    },
    "remove": function (val) { 
        //EDIT: Thx to Assef and luke for remove.

        indx = items.indexOf(val); 
        if(indx!=-1) items.splice(indx, 1); 
        Cookies.set(cookieName, items.join(','));        
    },
    "clear": function() {
        items = null;
        //clear the cookie.
        Cookies.set(cookieName, null);
    },
    "items": function() {
        //Get all the items.
        return items;
    }
  }
}

// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    fitRows: {
        gutter: 10
    }
});

// store filter for each group
var filters = {};

$('.filters').on( 'click', '.filter', function() {
  var $this = $(this);
  // get group key
  var $buttonGroup = $this.parents('.button-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  filters[ filterGroup ] = $this.attr('data-filter');
  // combine filters
  var filterValue = concatValues( filters );
  // set filter for Isotope
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', '.filter', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  
// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}

function inWorkshops(workshops, id) {
  return $.inArray(id, workshops) !== -1;
}

function hasWorkshops() {
  var list = new cookieList("workshops");
  return list.items().length !== 0
}

function addRemoveNoWorkshops() {
  if(!hasWorkshops()) {
    $('#added-workshops').append('<div class="row" id="no-workshops">No workshops added. Please add your workshops.</div>');
  }
  else {
    $('#no-workshops').remove();
  }
}

function loadWorkshops() {
  var list = new cookieList("workshops");
  var workshops = list.items();
  var length = workshops.length;
  for (var i = 0; i < length; i++) {
    var workshopId = '#'+workshops[i];
    var workshop = $(workshopId).clone();
    var button = $(workshop).find("i");
    $('#workshop-list').find(workshops[i]).find('i').removeClass('fa-plus-circle');
    workshop.removeClass('grid');
    workshop.removeClass('grid-item');
    workshop.css("position", "");
    workshop.css("top", "");
    workshop.css("left", "");
    button.removeClass('add_wkshp');
    button.removeClass('fa-plus-circle');
    button.addClass('fa-minus-circle'); 
    button.addClass('rm_wkshp');
    $('#added-workshops').append(workshop);
  }
}

function removePlus(workshop) {
  var button = this.parents('.wk').find('i');
  button.removeClass('fa-plus-circle');
}

function addPlus(workshop) {
  var button = this.parents('.wk').find('i');
  button.addClass('fa-plus-circle');
}

// for mobile version

// add workshop
$('.add_wkshp').on('click', function(e) {
  var list = new cookieList("workshops");
  var workshops = list.items();
  var workshop = $(this).parents('.wk').clone();
  var id = workshop.attr('id');
  if (inWorkshops(workshops, id)) {
    return;
  }
  $(this).removeClass('fa-plus-circle');
  var button = $(workshop).find('i');
  workshop.removeClass('grid');
  workshop.removeClass('grid-item');
  workshop.css("position", "");
  workshop.css("top", "");
  workshop.css("left", "");
  button.removeClass('add_wkshp');
  button.removeClass('fa-plus-circle');
  button.addClass('fa-minus-circle'); 
  button.addClass('rm_wkshp');
  $('#added-workshops').append(workshop);
  list.add(workshop.attr('id'));
  addRemoveNoWorkshops();
});

// remove workshop
$(document).on('click', '.rm_wkshp', function() {
  var workshop = $(this).parents('.wk')
  var id = workshop.attr('id');
  var list = new cookieList("workshops");
  list.remove(id);
  workshop.remove();
  $('#'+id).find('i').addClass('fa-plus-circle');
  addRemoveNoWorkshops();
});

$(document).ready(function() {
  addRemoveNoWorkshops();
  loadWorkshops();
});