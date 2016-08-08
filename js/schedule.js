$(document).ready(function() {
  $("#e1").click(function() {
    $(".event-info").fadeOut(function() {
        $(this).html("Lorem dim sum Pot sticker water chestnut cake bitter melon beef dumplings turnip cake leek dumplings deep fried taro turnover " +
            "Cha siu sou Cheong fan pan fried bitter melon beef dumpling mango pudding."
          ).fadeIn();
      }).fadeIn();
    });

});
