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

      // SATURDAY: Opening Ceremony
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

      // SATURDAY: Lunch / Small Group II
      case "e7":
        blurb = e7;
        break;

      // SATURDAY: Workshop session II
      case "e8":
        blurb = e8;
        break;

      // SATURDAY: Small Group III
      case "e9":
        blurb = e9;
        break;

      // SATURDAY: Break
      case "e10":
        blurb = e10;
        break;

      // SATURDAY: Break
      case "e11":
        blurb = e11;
        break;

      // SATURDAY: Small group I
      case "e12":
        blurb = e12;
        break;

      // FRIDAY: spring into MAASU
      case "e13":
        blurb = e13;
        break;

      // SATURDAY: Board buses
      case "e14":
        blurb = e14;
        break;

      // SATURDAY:  (M-rep Meetings, Bid proposal)
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

//Friday registration
e1 = "East Hall Address: 530 Church St, Ann Arbor, MI 48109";

// Friday GenAPA
e2 = "Theatre Address: 911 N University Ave, Ann Arbor, MI 48109 <br/> The theatre is located inside of the Michigan League.";

// Saturday Morning Registration
e3 = "Rackham Address: 915 E Washington St, Ann Arbor, MI 48109";

// Saturday Opening Ceremony
e4 = "Rackham Address: 915 E Washington St, Ann Arbor, MI 48109";

// Saturday Workshop Session I
e5 = "Please refer to the workshop table for locations.";

// Saturday Lunch / Small Group II
e6 = "Lunch will be taken with your small group. Please ask your small group leader on where to meet.";

// Saturday Workshop Session II
e7 = "Please refer to the workshop table for locations.";

// Saturday Workshop Session III
e8 = "Please refer to the workshop table for locations.";

// Saturday Small Group III
e9 = "Please ask your small group leader on where to meet.";

// Saturday break
e10 = "Feel free to spend this time however you want. Buses arrive at 6pm and will leave by 6:30pm.";

// Saturday Banquet / Keynote II
e11 = "The Diamond Center Address: 46100 Grand River Ave, Novi, MI 48374";

// Saturday Small Group I
e12 = "Please ask your small group leader on where to meet.";

// Friday Spring into MAASU
e13 = "East Hall Address: 530 Church St, Ann Arbor, MI 48109";

// Saturday Board Buses
e14 = "Buses will be leaving at 6:30pm sharp. Buses will be picking up at 911 N University Ave.";

// Saturday M-Rep Meetings, Bid Proposal
e15 = "For M-Reps only.";
