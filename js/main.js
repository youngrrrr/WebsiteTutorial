CONST MAX_FONT_SIZE = 50;

$("#pic").on("click", function() {
  var randomFontSize = Math.floor(Math.random() * MAX_FONT_SIZE);
  $(".my-font-size").css("font-size", randomFontSize + "px");
});
