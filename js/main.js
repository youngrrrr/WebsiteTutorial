$("#pic").on("click", function() {
  var randomFontSize = Math.random() * 50;
  $(".my-font-size").attr("font-size", randomFontSize + "px");
});
