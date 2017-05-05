//Business Logic


//Main function that will call upon smaller functions above
var pingPong = function(input) {
  if (input <= 0 || isNaN(input) === true) {
    return "This is not a positive integer, please enter a positive integer and try again.";
  }
  else {
    return "Congrats! This is a positive integer!"; //For testing purposes only
  }
}

//User Interface Logic
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputtedNumber = parseInt($("input#number").val());
    var result = pingPong(inputtedNumber);
    $("#result").text(result);
    $("#result").show();
  });
});
