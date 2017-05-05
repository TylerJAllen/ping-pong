//Business Logic


//Main function
var pingPong = function(input) {

  //Local array that empties after every pass through pingPong function
  var rangeArray = [];

  //If statement to filter out non-positive integers
  if (input <= 0 || isNaN(input) === true) {
    return "This is not a positive integer, please enter a positive integer and try again.";
  }

  //Loop to populate rangeArray with range from 1 to input
  for (var index = 1; index <= input; index += 1) {
    rangeArray.push(index);
  }
  return rangeArray;
}

//User Interface Logic
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputtedNumber = parseInt($("input#number").val());
    var result = pingPong(inputtedNumber);
    $("#result").hide();
    $("#result").show();
    $("#result").text(result);

  });
});
