$(document).ready(function() {
  $("tr").click(function() {
    // Creates jQuery variable 'event' that contains a string of whatever value
    // is in the id attribute of the selected row

    var info_id = $(this).attr('id');
    var blurb = "";

    // idk i thought a switch statement would be a good idea
    switch (info_id) {

      // FRIDAY: Registration
      case "e1":
        blurb = e1;
        break;

      // FRIDAY: GenAPA
      case "e2":
        blurb = e2;
        break;

      // SATURDAY: Morning registration
      case "e3":
        blurb = e3;
        break;

      // SATURDAY: Small Pod I
      case "e4":
        blurb = e4;
        break;

      // SATURDAY: Workshop Session I
      case "e5":
        blurb = e5;
        break;

      // SATURDAY: Small Pod II
      case "e6":
        blurb = e6;
        break;

      // SATURDAY: Lunch
      case "e7":
        blurb = e7;
        break;

      // SATURDAY: Workshop session II (M-rep Meetings, Bid proposal)
      case "e8":
        blurb = e8;
        break;

      // SATURDAY: Workshop session III
      case "e9":
        blurb = e9;
        break;

      // SATURDAY: Small pod III
      case "e10":
        blurb = e10;
        break;

      // SATURDAY: Break
      case "e11":
        blurb = e11;
        break;

      case "e12":
        blurb = e12;
        break;

      // For if they click any other row
      default:
        blurb = "Click on an event to show more info!";
    }

    // there's probably better logic to this i guess
    if ($(".event-info").html() !== blurb) {
        $(".event-info").stop(true,true).fadeOut(function() {
            // And the blurb replaces the html contents of the event info div
            $(this).html(blurb).stop(true,true).fadeIn();
        });
    }

    });
});

// FRIDAY: Registration
e1 = "The event details for Friday's registration have not yet been finalized; but once they are, we'll include them here. Stay tuned!";

// FRIDAY: GenAPA
e2 = "The event details for GenAPA have not yet been finalized; but once they are, we'll include them here. Stay tuned!";

// SATURDAY: Morning registration
e3 = "The event details for Saturday's registration have not yet been finalized; but once they are, we'll include them here. Stay tuned!";

// SATURDAY: Small Pod I
e4 = "The event details for the opening ceremony have not yet been finalized; but once they are, we'll include them here. Stay tuned!";

// SATURDAY: Workshop Session I
e5 = "The event details for workshop session I have not yet been finalized; but once they are, we'll include them here. Stay tuned!";

// SATURDAY: Small Pod II
e6 = "The event details for lunch/small group II have not yet been finalized; but once they are, we'll include them here. Stay tuned!";

// SATURDAY: Lunch
e7 = "The event details for workshop session II on Saturday have not yet been finalized; but once they are, we'll include them here. Stay tuned!";

// SATURDAY: Workshop session II (M-rep Meetings, Bid proposal)
e8 = "The event details for workshop session III have not yet been finalized; but once they are, we'll include them here. Stay tuned!";

// SATURDAY: Workshop session III
e9 = "The event details for small group III have not yet been finalized; but once they are, we'll include them here. Stay tuned!";

// SATURDAY: Small pod III
e10 = "Feel free to spend this time however you want. Buses arrive at 6pm and will leave by 6:30pm.";

// SATURDAY: Break
e11 = "The event details for banquet have not yet been finalized; but once they are, we'll include them here. Stay tuned!";

// SATURDAY: Small Group I
e12 = "The event details for small group I have not yet been finalized; but once they are, we'll include them here. Stay tuned!";
