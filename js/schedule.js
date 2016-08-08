$(document).ready(function() {
  $("tr").click(function() {
    // Creates jQuery variable 'event' that contains a string of whatever value
    // is in the id attribute of the selected row

    // tbh im not entirely sure this needs to be a jquery variable
    var $event = $(this).attr('id');


    // there's probably better logic to this i guess
    $(".event-info").fadeOut(function() {
      var blurb = "";

      // idk i thought a switch statement would be a good idea
      switch ($event) {

        // FRIDAY: Registration
        case "e1":
          blurb = "this is the first event";
          break;

        // FRIDAY: GenAPA
        case "e2":
          blurb = "this is the second event";
          break;

        // SATURDAY: Morning registration
        case "e3":
          blurb = "Morning Registration lorem ipsum something or another"
          break;

        // SATURDAY: Small Pod I
        case "e4":
          blurb = "Lorem dim sum Congee Shangai steam buns chicken feet mini egg tarts steamed sponge cake tofu with syrup" +
                  " Jin deui Chicken feet Potstickers stir fried radish";
          break;

        // SATURDAY: Workshop Session I
        case "e5":
          blurb = "Lorem dim sum Haam sui gau Jiu cai bau Zhaliang Pei guen Lo baak gou Taro cake Deep fried pumpkin and" +
                  " egg-yolk ball vegetarian crisp spring rolls dried scallop and leek puff." +
                  " Beef shank pork spiced salt baked octopus Fung zao Ngao yuk kau Pai gwut.";
          break;

        // SATURDAY: Small Pod II
        case "e6":
          blurb = "Lorem dim sum Crispy dragon roll honeydew puree with sago deep fried garlicky fish ball chee cheong fun" +
                  " with barbecued pork steamed radish cake steamed bun with premium lotus paste.";
          break;

        // SATURDAY: Lunch
        case "e7":
          blurb = "Cake sugar plum soufflé jelly-o pie. Cheesecake sweet chocolate bonbon chupa chups oat cake sweet roll" +
                  " muffin tart. Macaroon croissant caramels lollipop cupcake. Soufflé brownie powder marzipan chupa chups cotton candy bonbon tootsie roll donut.";
          break;

        // SATURDAY: Workshop session II (M-rep Meetings, Bid proposal)
        case "e8":
          blurb = "do you know how long it takes to find this many lorem ipsums";
          break;

        // SATURDAY: Workshop session III
        case "e9":
          blurb = "far too long.";
          break;

        // SATURDAY: Small pod III
        case "e10":
          blurb = ";_;";
          break;

        // SATURDAY: Break
        case "e11":
          blurb =";_;...";
          break;

        // SATURDAY: Banquet
        case "e12":
          blurb = "lksadflkjas";
          break;

        // For if they click any other row
        default:

          blurb = "Click on an event to show more info!";
      }

        // And the blurb replaces the html contents of the event info div
        $(this).html(blurb).fadeIn();
      }).fadeIn();
    });

});
