const MAX_COLOR_VAL = 255;

$("#pic").on("click", function() {
  var randomColorArr = getRandomColorArray();
  $(".my-font-color").css("color", "rgb(" + rgbArray[0] + "," + rgbArray[1] + "," + rgbArray[2] + ")");
});

function getRandomColorArray() {
  var r = Math.floor(Math.random() * MAX_COLOR_VAL);
  var g = Math.floor(Math.random() * MAX_COLOR_VAL);
  var b = Math.floor(Math.random() * MAX_COLOR_VAL);

  return [r, g, b];
}
