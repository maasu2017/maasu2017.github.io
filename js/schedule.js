$(document).ready(function() {
  $("tr").click(function() {
    // Creates jQuery variable 'event' that contains a string of whatever value
    // is in the id attribute of the selected row

    // tbh im not entirely sure this needs to be a jquery variable
    var $event = $(this).attr('id');

    // there's probably better logic to this i guess
    $(".event-info").stop(true,true).fadeOut(function() {
      var blurb = "";

      // idk i thought a switch statement would be a good idea
      switch ($event) {

        // FRIDAY: Registration
        case "e1":
          blurb = "The event details for Friday's registration have not yet been finalized; but once they are, we'll include them here. Stay tuned!";
          break;

        // FRIDAY: GenAPA
        case "e2":
          blurb = "The event details for GenAPA have not yet been finalized; but once they are, we'll include them here. Stay tuned!";
          break;

        // SATURDAY: Morning registration
        case "e3":
          blurb = "The event details for Saturday's registration have not yet been finalized; but once they are, we'll include them here. Stay tuned!";
          break;

        // SATURDAY: Small Pod I
        case "e4":
          blurb = "The event details for the morning ceremony/small group I have not yet been finalized; but once they are, we'll include them here. Stay tuned!";
          break;

        // SATURDAY: Workshop Session I
        case "e5":
          blurb = "The event details for workshop session I have not yet been finalized; but once they are, we'll include them here. Stay tuned!";
          break;

        // SATURDAY: Small Pod II
        case "e6":
          blurb = "The event details for lunch/small group II have not yet been finalized; but once they are, we'll include them here. Stay tuned!";
          break;

        // SATURDAY: Lunch
        case "e7":
          blurb = "The event details for workshop session II on Saturday have not yet been finalized; but once they are, we'll include them here. Stay tuned!";
          break;

        // SATURDAY: Workshop session II (M-rep Meetings, Bid proposal)
        case "e8":
          blurb = "The event details for workshop session III have not yet been finalized; but once they are, we'll include them here. Stay tuned!";
          break;

        // SATURDAY: Workshop session III
        case "e9":
          blurb = "The event details for small group III have not yet been finalized; but once they are, we'll include them here. Stay tuned!";
          break;

        // SATURDAY: Small pod III
        case "e10":
          blurb = "Feel free to spend this time however you want. Buses arrive at 6pm and will leave by 6:30pm.";
          break;

        // SATURDAY: Break
        case "e11":
          blurb = "The event details for banquet have not yet been finalized; but once they are, we'll include them here. Stay tuned!";
          break;

        // For if they click any other row
        default:
          blurb = "Click on an event to show more info!";
      }

        // And the blurb replaces the html contents of the event info div
        $(this).html(blurb).stop(true,true).fadeIn();
      });
    });

});
