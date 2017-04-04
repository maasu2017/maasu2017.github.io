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

      case "e13":
        blurb = e13;
        break;

      case "e14":
        blurb = e14;
        break;

      case "e15":
        blurb = e15;
        break;

      // For if they click any other row
      default:
        blurb = "Click on an event to show more info! Addresses for locations will appear here.";
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

e1 = "East Hall Address: 530 Church St, Ann Arbor, MI 48109";

e2 = "Theatre Address: 911 N University Ave, Ann Arbor, MI 48109 <br/> The theatre is located inside of the Michigan League.";

e3 = "Rackham Address: 915 E Washington St, Ann Arbor, MI 48109";

e4 = "Rackham Address: 915 E Washington St, Ann Arbor, MI 48109";

e5 = "Please refer to the workshop table for locations.";

e6 = "Lunch will be taken with your small group. Please ask your small group leader on where to meet.";

e7 = "Please refer to the workshop table for locations.";

e8 = "Please refer to the workshop table for locations.";

e9 = "Please ask your small group leader on where to meet.";

e10 = "Feel free to spend this time however you want. Buses arrive at 6pm and will leave by 6:30pm.";

e11 = "The Diamond Center Address: 46100 Grand River Ave, Novi, MI 48374";

e12 = "Please ask your small group leader on where to meet.";

e13 = "East Hall Address: 530 Church St, Ann Arbor, MI 48109";

e14 = "Buses will be leaving at 6:30pm sharp. Buses will be picking up at S State St & N University Ave.";

e15 = "For M-Reps only.";
