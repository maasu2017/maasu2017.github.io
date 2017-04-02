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

// for mobile version
$('.add_wkshp').on('click', function(e) {
  // console.log("hello");
  var workshop = $(this).parents('.grid-item').clone();
  var button = $(workshop).find("i");
  button.removeClass('add_wkshp');
  button.removeClass('fa-plus-circle');
  button.addClass('fa-minus-circle'); 
  button.addClass('rm_wkshp');
  workshop.removeClass('grid');
  console.log(button);
  workshop.removeClass('grid-item');
  workshop.css("position", "");
  workshop.css("top", "");
  workshop.css("left", "");
  var lol = workshop[0].children[1].children;
  $('#added-workshops').append(workshop);
});