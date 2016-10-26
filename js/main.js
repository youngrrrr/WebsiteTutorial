const MAX_COLOR_VAL = 255;

$("#pic").on("click", function() {
  var randomColorArr = getRandomColorArray();
  $(".my-font-color").css("color", "rgb(" + randomColorArr[0] + "," + randomColorArr[1] + "," + randomColorArr[2] + ")");
});

function getRandomColorArray() {
  var r = Math.floor(Math.random() * MAX_COLOR_VAL);
  var g = Math.floor(Math.random() * MAX_COLOR_VAL);
  var b = Math.floor(Math.random() * MAX_COLOR_VAL);

  return [r, g, b];
}
